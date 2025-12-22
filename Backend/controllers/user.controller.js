import User from "../models/User.js";
import jwt from "jsonwebtoken";

// Genarate JWT token 
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d'
    });
};

// Register new user
export const registerUser = async (req, res) => {
    try {
        const { name, email, password, grade } = req.body;

        // Validate input fields 
        if (!name || !email || !password || !grade) {
            return res.status(400).json({
                message: "Please enter all required fields"
            });
        }
        // Check if user already exists
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({
                message: "User already exists"
            });
        }
        // Create new user
        const newUser = await User.create({
            name,
            email,
            password,
            grade
        });
        // Respond with success message
        res.status(201).json({
            message: "User registered successfully",
            user: {
                id: newUser._id,
                name: newUser.name,
                email: newUser.email,
                grade: newUser.grade
            }
        });
        //  Catch errors 
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};
// Login user
export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // validate input fields 
        if (!email || !password) {
            return res.status(400).json({
                message: "please enter email and password"
            })
        }


        //find user 
        const user = await User.findOne({ email });


        if (user && (await user.matchPassword(password))) {
            res.status(200).json({
                message: "login successful",
                token: generateToken(user._id),
                user: {
                    id: user._id,
                    name: user.name,
                    email: user.email,
                    grade: user.grade,
                },
            });
        } else {
            res.status(401).json({
                message: "invalid email or password"
            });
        }

    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({
            message: "server error"
        })
    }
}
export const getUserProfile = async (req, res) => {
    res.status(200).json({
        message: "profile accessed successfully ",
        user: req.user,
    });
};

