const User = require('../models/User')
const bcrypt = require('bcryptjs')
const {createSecretToken} = require('../utils/SecretToken')

module.exports.Signup = async(req, res, next)=>{
    try{   
    const {username, email, password, createdAt} = req.body;
    const existingUser = await User.findOne({email})
    if(existingUser){
        return res.json({meaasge:"user exist already"})
    }
    const user= await User.create({username, email, password, createdAt})
    const token = createSecretToken(user._id)
    res.cookie("token", token, {
        withCredentials: true,
        httpOnly: false,
      });
      res
        .status(201)
        .json({ message: "User signed in successfully", success: true, user });
      next();
    } catch (error) {
      console.error(error);
    }
  };