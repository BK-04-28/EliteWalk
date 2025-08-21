const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config(); // 👈 Added

const userModel = require('./UserModel'); // 👈 Ensure file name matches exactly

const app = express();
app.use(express.json());

app.use(cors(
  {
    origin : ["https://elite-walk-frontend.vercel.app"],
    methods : ["POST","GET"],
    credentials : true
  }
));

// MongoDB connection from .env
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("MongoDB connected"))
.catch((err) => console.log("MongoDB connection error:", err));

app.get("/", (req, res)=>{
    res.json("hello");
})
// Register route
app.post('/register', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const user = await userModel.create({ name, email, password });
    res.status(201).json(user);
  } catch (err) {
    console.error("Error inserting user:", err);
    res.status(500).json({ error: 'Registration failed', details: err });
  }
});

// Login route
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

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
