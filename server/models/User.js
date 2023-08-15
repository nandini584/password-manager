const mongoose= require('mongoose');
const bcrypt = require('bcryptjs');
const userSchema= new mongoose.Schema({
    email:{
        type:String,
        required:[true, "please enter your email"],
        unique:true,
    },
    username:{
        type:String,
        required:[true, "please enter your username"],
    },
    password:{
        type:String,
        required:[true, "please enter your password"],
        minlength:8,
    },
    passwordlog:{
        type:Object,
    },
    createdAt:{
        type:Date,
        default: new Date()
    }
})

userSchema.pre('save',async function(){
    this.password= await bcrypt.hash(this.password,12);
})
module.exports = mongoose.model('User',userSchema)