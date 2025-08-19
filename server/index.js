const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors');
const userModel = require('./UserModel');


// Initialize the app
const app = express();
app.use(express.json())
app.use(cors());

mongoose.connect('mongodb://localhost:27017/Users',{
    useNewUrlParser : true,
    useUnifiedTopology : true
})
.then(()=>console.log("mongo connected"))
.catch((err)=>console.log('error:',err))

app.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  console.log("Received registration data:", req.body); // 👈 Add this log

  try {
    const user = await userModel.create({ name, email, password });
    console.log("User inserted:", user); // 👈 Optional success log
    res.status(201).json(user);
  } catch (err) {
    console.error("Error inserting user:", err); // 👈 Error log
    res.status(500).json({ error: 'Registration failed', details: err });
  }
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await userModel.findOne({ email });

    if (!user) {
      return res.json({ success: false, message: "User not found" });
    }

    if (user.password !== password) {
      return res.json({ success: false, message: "Wrong password" });
    }

    res.json({ success: true, user });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ success: false, error: "Login failed" });
  }
});


const PORT  = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log('server running on 5000')
})