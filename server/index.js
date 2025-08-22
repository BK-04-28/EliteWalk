// ✅ Dependencies
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const User = require("./UserModel"); // make sure filename is correct

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ CORS setup (must match frontend domain)
const allowedOrigin = "https://elite-walk-frontend.vercel.app";

app.use(cors({
  origin: allowedOrigin,
  credentials: true,
}));

app.use(express.json()); // to parse JSON bodies

// ✅ MongoDB URI
const mongoURI = "mongodb+srv://Bharath:bharath123@cluster0.4tbfg.mongodb.net/E-commerce?retryWrites=true&w=majority&appName=Cluster0";

// ✅ MongoDB Connection
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("✅ MongoDB Atlas connected"))
  .catch(err => console.log("❌ MongoDB connection error:", err));

// ✅ Register Route
app.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ success: false, message: "User already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save user
    const userDoc = await User.create({ name, email, password: hashedPassword });

    res.status(201).json({ success: true, user: { name: userDoc.name, email: userDoc.email } });
  } catch (error) {
    console.error("Register API error:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

// ✅ Login Route
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ success: false, message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ success: false, message: "Invalid credentials" });

    res.status(200).json({
      success: true,
      message: "Login successful",
      user: { name: user.name, email: user.email },
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

// ✅ Test route
app.get("/", (req, res) => {
  res.send("API is working ✅");
});

// ✅ Export for Vercel or run locally
if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
  });
}

module.exports = app;
