import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken';
import userModel from '../models/userModel.js';
import transporter from '../config/nodemailer.js';

export const register = async (req , res) => {
   

    const {name,username, email, dob, phone , password} = req.body;

    if (!name || !username || !email || !dob || !phone || !password ){
        return res.json({success: false, message: 'missing data'})
    }


    try {
        
        const existingUser = await userModel.findOne({email}) // email should be unique 

        if (existingUser){
            return res.json({success: false, message:'user email already exists'})
        }

        const mailOptions = {
            from: process.env.SENDER_EMAIL,
            to: email,
            subject: 'Welcome to ANJANI SWEETS KHARAGPUR',
            text: `welcome to ANJANI SWEETS KHARAGPUR. Your account has been created with email id ${email}`
        }

        await transporter.sendMail(mailOptions)

        const hashedPassword = await bcrypt.hash(password, 10); // level 5 to 15 the more you increase the level the more time it will take resulting in strong encryption 

        const user = new userModel({name , username, email,dob , phone , password: hashedPassword})
        await user.save(); // save in data base 

        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn:'7d'}) //token is generated for user using jwt which needs a input user id , jwt secret key (can be any string) , expiry time 
        res.cookie('token' , token, {   //send token thought cookies - it contains name , token , properties 
            httpOnly : true,            //
            secure: process.env.NODE_ENV === 'production', // https false if production because localhost runs on http
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',  // back and frontend run on same site in production(localhost) but can run on different domain if hostrd
            maxAge: 7 *24 * 60 * 60 * 1000   // age of the cookie is 7days in milliseconds 
        })

        

        
        return res.json({success:true , message:'registration sucessful '})
    } catch (error) {
        res.json({success: false, message: error.message})
    }

}


export const login = async ( req ,res ) => {
    console.log("Request body is:", req.body);
    const {email, password} =req.body;

    if(!email || !password ){
        return res.json({success: false, message:'missing data'})
    }

    try {

        const user = await userModel.findOne({email})
        if(!user){
            return res.json({success: false , message: 'user not exists need to register first '})
        }

        console.log(user)
        const isPasswordMatch = await bcrypt.compare(password , user.password)

        if(!isPasswordMatch){
            return res.json({success: false, message: 'password mismatch'})
        }

        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET , {expiresIn: '7d'})

        res.cookie('token' , token , {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
            maxAge: 7*24*60*60*1000
        })

        return res.json({success: true, message:'login successful'})
        
    } catch (error) {
        res.json({success: false, message: error.message})
    }
}


export const logout = (req,res) =>{

    try {

    res.clearCookie('token',{
        http: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
        maxAge: 7*24*60*60*1000
    })

    return res.json({success:true, message:'logout successful'})
    } catch (error) {
        res.json({success:false, message: error.message})
    }
}



// send otp to user's email 
export const sendVerifyOtp = async (req,res)=>{

 
    const userId = req.userId;


  try {


    const user = await userModel.findById(userId);
    console.log(user.name)
    if(user.isAccountVerified) {
        return res.json({success: false, message:'account already verified'})
    }

    const otp = String(Math.floor(100000+Math.random()*600000)) //6 digit otp

    user.verifyOtp = otp;
    user.verifyOptExpireAt = Date.now() + 24 *60*60*1000;
    await user.save();

    console.log(otp)
    const mailOptions = {
        from: process.env.SENDER_EMAIL,
        to: user.email,
        subject: "Email OTP Verification",
        text: `Your OTP is ${otp} please verify your account by entering the otp. Do not share this OTP and OTP will expire in 24 hrs`
    }

    await transporter.sendMail(mailOptions);
    
    return res.json({success:true, message:'otp send '})
  } catch (error) {
    
    res.json({success: false,message: error.message})
  }
}



export const verifyAccount = async (req,res) => {

    const {otp} = req.body;
    const userId = req.userId;
    try {


        const user = await userModel.findById(userId);
        if(user.isAccountVerified){
            return res.json({success: false, message:'email already verified go to login page'})
        }

        if(otp !== user.verifyOtp){
            return res.json({success: false, message: 'otp mismatch enter again'})
        }

        if( user.verifyOptExpireAt < Date.now()){
            return res.json({success: false, message: 'otp expired'})
        }
        user.isAccountVerified = true;
        user.verifyOtp = '';
        user.verifyOptExpireAt = 0;
        await user.save();

        return res.json({success: true , message: 'otp correct email verified'})

    } catch (error) {
        res.json({success:false, message: error.message})
    }
}

//user is authenticated or not 
export const isAuthenticated = async (req,res) =>{
    try {
        return res.json({success:true, message:'user authenticated'})
    } catch (error) {
        res.json({success: false, meesage:error.message})
    }
}

//send password reset otp

export const sendResetOtp = async (req,res) =>{

    const {email} = req.body;

    if(!email){
        return res.json({success: false, message:'email missing'})
    }

    try {

        const user = await userModel.findOne({email})

        if(!user){
            return res.json({success: false, message:"user not found"})
        }

        const resetPasswordOtp = String(Math.floor(100000+Math.random()*600000));
        const resetPasswordExpiry = Date.now() + 24*60*60*1000;

        user.resetPasswordOtp = resetPasswordOtp;
        user.restPasswordOptExpireAt = resetPasswordExpiry;
        user.save();


        const mailOptions = {
            from: process.env.SENDER_EMAIL,
            to: email,
            subject: "password reset OTP",
            text: `You reset password otp is ${resetPasswordOtp}. Do not share the otp and OTP will expire in 24 hrs`
        }

        await transporter.sendMail(mailOptions);

        return res.json({success: true, message:"reset password otp send"})
        
    } catch (error) {
        res.json({success: false, message: error.message})
    }
}


export const resetPassword = async(req,res) => {

    const {email, resetOtp , newPassword} = req.body;

    if(!email || !resetOtp || !newPassword){
        return res.json({success: false, message:"otp missing"})
    } 

    try {
        const user = await userModel.findOne({email})
        if(!user){
            return res.json({Success: false, message:'user not found'})
        }

        if(user.resetPasswordOtp === "" ||resetOtp !== user.resetPasswordOtp){
            return res.json({success: false, meesage:'incorrect otp'})
        }

        if(user.restPasswordOptExpireAt < Date.now()){
            return res.json({success: false, meesage:'otp expired'})
        }

        const hashedPassword = await bcrypt.hash(newPassword, 10);

        user.password = hashedPassword;
        user.resetPasswordOtp = "";
        user.restPasswordOptExpireAt = 0 ;
        user.save();

        return res.json({success: true, message:'password reset successful'})

    } catch (error) {
        res.json({success: false, message: error.message});
    }
} 