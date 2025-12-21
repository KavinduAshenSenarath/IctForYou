import express from "express";
import dotenv from "dotenv";
import connectDB from "./Config/db.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();

const app = express();
// Middleware 
app.use(express.json());

connectDB();

app.get("/", (req, res) => {
    res.send("Server is running");
});
// routes  
app.use("/api/users", userRoutes);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

