const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User'); // Make sure the path matches the location of your User model
const router = express.Router();
const jwt = require('jsonwebtoken');

router.post('/register', async (req, res) => {
    console.log("Registering user:", req.body);
    try {
        
        const user = new User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        });
        const newUser = await user.save();
        console.log("User registered:", newUser);
        res.status(201).json(newUser);
    } catch (error) {
        console.error("Error registering user:", error);
        res.status(500).json({ message: "Error registering user", error: error.message });
    }
});


// Login User
const SECRET_KEY = 'your_secret_key';  // You should keep this secret and secure

router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        if (req.body.password !== user.password) {
            return res.status(401).json({ message: "Invalid password" });
        }

        // Create a token
        const token = jwt.sign(
            { userId: user._id, email: user.email },
            SECRET_KEY,
            { expiresIn: '24h' }  // Token expires in 24 hours
        );

        res.status(200).json({ message: "Logged in successfully", token });
    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ message: "Login error", error: error.message });
    }
});





// Get all users
router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
