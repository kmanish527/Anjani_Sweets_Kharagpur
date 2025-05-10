import jwt from "jsonwebtoken";

export const userAuth = (req,res,next)=>{

    const {token} = req.cookies;
    console.log(token)
    if(!token){
        return res.json({success:false, message:'Not Authorized Login Again'})
    }

    try {
    
        const tokenDecode = jwt.verify(token, process.env.JWT_SECRET)
        console.log(tokenDecode)
        console.log(tokenDecode.id)
        if(tokenDecode.id){
            console.log(" in if")
            req.userId = tokenDecode.id
            
        }
        else{
            return res.json({success: false, message: 'not authorized login again'})
        }

        console.log("above next")
        next();
    } catch (error) {
        res.json({success:false, message: error.message})
    }
}

