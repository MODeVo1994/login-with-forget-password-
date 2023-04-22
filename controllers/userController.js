const User=require("../models/userModel")
const jwt=require("jsonwebtoken")
const{sendCostomizedEror}=require("../utils/helper")



exports.registerUser=async(req,res)=>{
    const {name,email,password}=req.body

    const existedUser=await User.findOne({email})
    if(existedUser){
      return   sendCostomizedEror(res,"this email exists")
    }


  
   
        
        const newUser=new User({
            name,email,password

        })
        const registredUser=await newUser.save()

        
        res.send(registredUser)
   
}


exports.signIn=async(req,res)=>{
    const{email,password}=req.body
   
    
  const chekeduserCorrect=await User.findOne({email})
  if(!chekeduserCorrect){
    return sendCostomizedEror(res,"no user with that credentials exists")


  }
  const isMatched=await user.comparePassword(password)
  if(!isMatched)  return sendCostomizedEror(res,"wrong credentials")
 const token=jwt.sign({userId:user._id},"werkfjfjfjfj",{
    expiresIn:"1d"
 })
 res.json({success:true,user:{name:user.name,email:user.email,id:user._id,token:token}})
}
 