import React, { useState } from "react";
import { Search, Clock, Users, Star } from "lucide-react";

const BrowseOurBestLessons = () => {
    const [activeCategory, setActiveCategory] = useState("all");
    const [searchTerm, setSearchTerm] = useState("");

    /* ---------- CATEGORIES ---------- */
    const categories = [
        { id: "all", label: "All Lessons" },
        { id: "grade6-8", label: "Grade 6-8" },
        { id: "grade9-11", label: "Grade 9-11" },
        { id: "ol", label: "O/L" },
        { id: "al", label: "A/L" },
    ];

    /* ---------- LESSON DATA ---------- */
    const lessons = [
        {
            id: 1,
            title: "Introduction to Python Programming",
            category: "grade9-11",
            description: "Learn Python basics with practical examples.",
            duration: "4 hours",
            students: 1240,
            rating: 4.8,
            level: "Beginner",
            image: "python.png",
        },
        {
            id: 2,
            title: "HTML & CSS Fundamentals",
            category: "grade6-8",
            description: "Learn how to build your first website.",
            duration: "3 hours",
            students: 980,
            rating: 4.9,
            level: "Beginner",
            image: "htmlcss.png",
        },
        {
            id: 3,
            title: "Database Management with SQL",
            category: "ol",
            description: "Understand databases and basic SQL queries.",
            duration: "5 hours",
            students: 756,
            rating: 4.7,
            level: "Intermediate",
            image: "database.png",
        },
    ];

    /* ---------- FILTER ---------- */
    const filteredLessons = lessons.filter((lesson) => {
        const matchCategory =
            activeCategory === "all" || lesson.category === activeCategory;

        const matchSearch =
            lesson.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            lesson.description.toLowerCase().includes(searchTerm.toLowerCase());

        return matchCategory && matchSearch;
    });

    /* ---------- LEVEL COLORS ---------- */
    const levelColors = {
        Beginner: "bg-green-100 text-green-700",
        Intermediate: "bg-blue-100 text-blue-700",
        Advanced: "bg-purple-100 text-purple-700",
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4">
            <div className="max-w-6xl mx-auto">
                {/* ---------- SEARCH ---------- */}
                <div className="max-w-xl mx-auto mb-8 relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search lessons..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none"
                    />
                </div>

                {/* ---------- CATEGORY FILTER ---------- */}
                <div className="flex flex-wrap justify-center gap-3 mb-10">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveCategory(cat.id)}
                            className={`px-5 py-2 rounded-full border transition ${activeCategory === cat.id
                                ? "bg-blue-600 text-white"
                                : "bg-white hover:bg-gray-100"
                                }`}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>

                {/* ---------- LESSON CARDS ---------- */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredLessons.map((lesson) => (
                        <div
                            key={lesson.id}
                            className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
                        >
                            {/* IMAGE */}
                            <img
                                src={lesson.image}
                                alt={lesson.title}
                                className="h-40 w-full object-cover"
                            />

                            {/* CONTENT */}
                            <div className="p-5">
                                <span
                                    className={`text-xs px-3 py-1 rounded-full ${levelColors[lesson.level]}`}
                                >
                                    {lesson.level}
                                </span>

                                <h3 className="text-lg font-bold mt-3">
                                    {lesson.title}
                                </h3>

                                <p className="text-sm text-gray-600 mt-2 mb-4">
                                    {lesson.description}
                                </p>

                                {/* STATS */}
                                <div className="flex justify-between text-sm text-gray-500 mb-4">
                                    <span className="flex items-center gap-1">
                                        <Clock size={14} /> {lesson.duration}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <Users size={14} /> {lesson.students}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <Star size={14} className="text-yellow-400 fill-yellow-400" />
                                        {lesson.rating}
                                    </span>
                                </div>

                                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg">
                                    Start Learning
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* ---------- EMPTY MESSAGE ---------- */}
                {filteredLessons.length === 0 && (
                    <p className="text-center text-gray-500 mt-10">
                        No lessons found
                    </p>
                )}
            </div>
        </div>
    );
};

export default BrowseOurBestLessons;
