import express from 'express';
import User from '../models/User.js';

const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const { name, email, password, grade } = req.body;

    // check required fields 
    if (!name || !email || !password || !grade) {
      return res.status(400).json({
        message: "please enter all required fields"
      })
    }

    // check if user already exites 
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({
        message: "user already exists",
      })
    }

    // create new user 
    const newUser = new User({
      name,
      email,
      password,
      grade,
    })

    //send responce 
    res.status(201).json({
      message: "user registred successfully",
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        grade: newUser.grade,
      },
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "server error",
    });
  }
});
export default router;