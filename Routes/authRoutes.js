const express = require("express");
const router = express.Router();
const validateSignup = require("../middleware/validateSignup");
const { signup } = require("../controllers/authController");

//bhaion yahan pe middleware bhio chal jayega 
//signup karne se pehle usse bvalidate karna parega 

router.post("/signup", validateSignup, signup);
module.exports=router;
