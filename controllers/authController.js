const { validationResult } = require("express-validator");
const User = require("../models/User");

exports.signup=async(req, res)=>{
    const errors=validationResult(req);
     if (!errors.isEmpty()) {
    return res.send(`
      <p style="color:red">${errors.array()[0].msg}</p>
      <a href="/">Back</a>
    `);
    }
    //signup auth check karo ki ye banda jo hai exist karta hai ki nhi
    ///email se hee hoga
    const { name, email, password } = req.body;

  const userExists = await User.findOne({ email });
  if (userExists) {
    return res.send(`
      <p style="color:red">Email already registered</p>
      <a href="/">Back</a>
    `);
  }
  //save it 
  await User.create({name, email,password});
  res.send(`<p style="color:green">Signup successful ✅</p>`);
}