const express = require("express");
const connectDB = require("./config/db");

const app = express();
connectDB();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send(`
    <h2>Signup API</h2>
    <form method="POST" action="/signup">
      <input name="name" placeholder="Name"/><br/><br/>
      <input name="email" placeholder="Email"/><br/><br/>
      <input name="password" type="password" placeholder="Password"/><br/><br/>
      <button>Signup</button>
    </form>
  `);
});

app.use("/", require("./Routes/authRoutes")); //Routes

app.listen(5000, () => console.log("Server running on port 5000"));
