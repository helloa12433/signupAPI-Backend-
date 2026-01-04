# 🚀 Signup API (Node.js + Express + RequestValidation +Middleware +  MongoDB)

This project is a simple and industry-standard **User Signup REST API** built using **Node.js, Express.js, and MongoDB**.  
It demonstrates clean backend architecture, request validation, and database integration following best practices.

---

## ✨ Features
- User Signup API
- Request validation using express-validator
- Middleware-based architecture
- MongoDB integration using Mongoose
- Clean and scalable folder structure
- Proper HTTP status codes and responses

---

## 🛠 Tech Stack
- Node.js
- Express.js
- MongoDB
- Mongoose
- express-validator

---

project/
│
├── config/
│   └── db.js
│
├── models/
│   └── User.js
│
├── controllers/
│   └── authController.js
│
├── routes/
│   └── authRoutes.js
│
├── middleware/
│   └── validateRequest.js
│
├── server.js
└── package.json




---

## 🔄 API Flow (Signup)
1. User submits signup form from browser
2. Request passes through validation middleware
3. Invalid data returns error messages (e.g. invalid email)
4. Valid data is stored in MongoDB
5. Success response is sent to client

---

## ▶️ Run Locally

Install dependencies:

npm install

Start server:
npm start

Server runs on:
http://localhost:5000

📌 Learning Outcomes

Understanding request–response lifecycle

Writing validation middleware

MongoDB schema design with Mongoose

Clean backend folder structure

Using proper HTTP status codes

🚀 Future Enhancements

Password hashing using bcrypt

Login API

JWT authentication

Role-based authorization

Protected routes

