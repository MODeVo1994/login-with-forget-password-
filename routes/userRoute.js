const router=require("express").Router()
 const{registerUser,signIn}=require("../controllers/userController")
const { validate, validateUser } = require("../middelwares/validator")

router.post("/register",validateUser,validate,registerUser)
router.post("/login",signIn)
module.exports=router








