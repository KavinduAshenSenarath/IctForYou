import { useState } from "react";

export default function Register() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        grade: "",
        phone: "",
    });

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        console.log("Form Data:", formData);
        setSuccess("Registration successful!");

        setFormData({
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
            grade: "",
            phone: "",
        });
    };

    return (
        <div className="h-screen flex items-center justify-center bg-gray-100 overflow-hidden ">
            <div className="bg-white p-7 rounded-2xl shadow-lg w-full max-w-md ">
                <img src="logo.png" alt="logo" className=" mx-auto w-12 h-12" />
                <h2 className="text-2xl font-bold text-center text-blue-500 mb-6">
                    Register for ICT Classes
                </h2>

                {error && (
                    <p className="bg-red-100 text-red-600 p-2 rounded mb-3 text-sm">
                        {error}
                    </p>
                )}

                {success && (
                    <p className="bg-green-100 text-green-600 p-2 rounded mb-3 text-sm">
                        {success}
                    </p>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border rounded-xl"
                    />

                    <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border rounded-xl"
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border rounded-xl"
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border rounded-xl"
                    />

                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border rounded-xl"
                    />

                    <select
                        name="grade"
                        value={formData.grade}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border rounded-xl"
                    >
                        <option value="">Select Grade</option>
                        <option>Grade 6</option>
                        <option>Grade 7</option>
                        <option>Grade 8</option>
                        <option>Grade 9</option>
                        <option>Grade 10</option>
                        <option>Grade 11 (O/L)</option>
                        <option>Grade 12 (A/L)</option>
                        <option>Grade 13 (A/L)</option>
                    </select>
                    <div className="flex gap-2">
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-2 rounded-xl font-semibold hover:bg-indigo-700 transition"
                        >
                            Register
                        </button>
                        <button
                            type="reset"
                            className="w-full bg-blue-500 text-white py-2 rounded-xl font-semibold hover:bg-indigo-700 transition"
                        >
                            Reset
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
