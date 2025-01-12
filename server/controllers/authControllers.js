const Usermodels = require("../models/user.js");
const bcryptjs = require("bcryptjs");
const jwt = require('jsonwebtoken')

const register = async (req, res) => {
  try {
    const { email, fullname, password, confirmPassword } = req.body;

    // Validate confirm password
    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match!" });
    }

    // Check if user already exists
    const existingUser = await Usermodels.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "User already registered with this email!" });
    }

    // Hash the password
    const hashedPassword = await bcryptjs.hash(password, 10);

    // Save the new user
    const newUser = new Usermodels({
      email,
      fullname,
      password: hashedPassword,
    });
    await newUser.save();

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      user: { email, fullname }, // Do not return the password in the response
    });
  } catch (error) {
    console.error("Registration Error:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if the user exists
        const user = await Usermodels.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'User not found!' });
        }

        // Compare passwords
        const isMatch = await bcryptjs.compare(password, user.password);
        
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials!' });
        }

        const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, {
            expiresIn: "1h",
          });
          res.status(200).json({
            success: true,
            message: 'Login successful',
            user: { email, username: user.fullname },
            data:{user,token}
        });
    } catch (error) {
        console.error('Login Error:', error.message);
        res.status(500).json({ message: 'Internal server error' });
    }
};


module.exports = { register, login };
