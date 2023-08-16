const User = require('../models/User')
require('dotenv').config()
const jwt = require('jsonwebtoken')

module.exports.userVerification = (req, res)=>{
    const token = req.cookies.token
    if(!token){
        return res.json({message:"please login"})
    }
    jwt.verify(token, process.env.SECRET_TOKEN, async(err, data)=>{
        if(err){
            return res.json({status:false})
        }else{
            const user= await User.findById(data.id)
            if(user){
                return res.json({status:true, user})
            }else{ return res.json({status:false})}
        }
    })}