import { useState } from "react";
import axios from "axios"

export default function Login() {


    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        if (!formData.email || !formData.password) {
            setError("All fields are required");
            return;
        }

        try {
            const { data } = await axios.post(
                "http://localhost:5000/api/users/login",
                formData
            );

            //saved the jwt token 
            localStorage.setItem("token", data.token);
            localStorage.setItem("user", JSON.stringify(data.user));

            // rederict to the dashboard 
            navigate("/dashboard")


        } catch (err) {
            setError(err.response?.data?.message || "login failed")
        }
    };




    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center">
            <img src="logo.png" alt="logo" className="mx-auto w-12 h-12" />
            <h1 className="font-bold text-3xl text-gray-800 mb-2">Welcome Back!</h1>
            <p className="text-gray-600 mb-2">Login to continue your learning journey</p>
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100 w-full max-w-md">
                {error && (
                    <p className="bg-red-100 text-red-600 p-2 rounded mb-3 text-sm">{error}</p>
                )}
                {success && (
                    <p className="bg-green-100 text-green-600 p-2 rounded mb-3 text-sm">{success}</p>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                    <label className="block text-left text-gray-500">Email Address</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter Your Email Address"
                        required
                        className="w-full rounded-xl px-4 py-2 border focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />

                    <label className="block text-left text-gray-500">Password</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Enter Your Password"
                        required
                        className="w-full rounded-xl px-4 py-2 border focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />

                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-xl hover:bg-blue-700 transition"
                    >
                        Login
                    </button>

                    <div className="flex justify-between">
                        <div>
                            <input type="checkbox" name="remember" className="mr-2" />
                            <label htmlFor="remember" className="text-gray-600">Remember Me</label>
                        </div>
                        <p className="text-indigo-600 hover:underline cursor-pointer">Forgot Password?</p>
                    </div>

                    <div>
                        <p className="text-gray-600">Or Continue with</p>
                    </div>

                    <div className="flex justify-between gap-3">
                        <button
                            type="button"
                            className="w-full flex items-center justify-center gap-3 border border-blue-400 rounded-xl py-2 hover:bg-gray-100 transition"
                        >
                            {error && <p>{error}</p>}
                            <img src="google.svg" alt="Google" className="w-5 h-5 cursor-pointer" />
                            Google
                        </button>

                        <button
                            type="button"
                            className="w-full flex items-center justify-center gap-3 border border-blue-400 rounded-xl py-2 hover:bg-gray-100 transition"
                        >
                            <img src="facebook.svg" alt="Facebook" className="w-5 h-5 cursor-pointer" />
                            Facebook
                        </button>
                    </div>

                    <p className="text-gray-500 font-semibold">
                        Don't have an account? <span className="text-blue-500 hover:text-blue-700 font-semibold cursor-pointer">Register here</span>
                    </p>
                </form>
            </div>
        </div>
    );
}
