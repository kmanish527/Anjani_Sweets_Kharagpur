import userModel from "../models/userModel.js";



export const getUserData = async (req,res)=>{

    console.log("in user data")

    try {
        
        const userId = req.userId;
        console.log(userId)
        const user = await userModel.findById(userId)
        console.log(userId)

        if(!user){
            return res.json({success: false, message:"user not found"})
        }

        return res.json({success:true,
            userData:{
                name:user.name,
                isAccountVerified:user.isAccountVerified
            }
        })

    } catch (error) {
        res.json({success:false, message: error.message})
    }
} 