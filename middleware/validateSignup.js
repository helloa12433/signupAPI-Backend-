//Req validation 

const {body}=require("express-validator");

module.exports=[
     body("email")
    .trim()
    .notEmpty().withMessage("Email required")
    .isEmail().withMessage("Invalid email"),

  body("password")
    .notEmpty().withMessage("Password required")
    .isLength({ min: 6 }).withMessage("Password min 6 chars"),

  body("name")
    .optional()
    .trim()
    .notEmpty().withMessage("Name cannot be empty")
];