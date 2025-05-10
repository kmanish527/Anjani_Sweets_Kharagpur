import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    username: {type: String, required: true},
    email: {type: String, required: true, unique:true},
    dob: {type: String, required: true},
    phone: {type: Number, required: true, unique:true},
    password: {type: String, required: true},

    verifyOtp: {type: String, default: ''},
    verifyOptExpireAt: {type: Number, default: 0},
    isAccountVerified: {type: Boolean, default: false},
    resetPasswordOtp: {type: String, default:''},
    restPasswordOptExpireAt: {type: String, default: 0}
})

const userModel = mongoose.model.user || mongoose.model('user', userSchema)

export default userModel;