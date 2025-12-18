export default function Service() {
    const services = [
        {
            title: "ICT Classes (Grade 6 – A/L)",
            description:
                "Well-structured ICT lessons for students from Grade 6 to Advanced Level, covering theory and practical concepts.",
            icon: "📘",
        },
        {
            title: "Online Learning Platform",
            description:
                "Access lessons, notes, and learning materials anytime through a modern and user-friendly web platform.",
            icon: "💻",
        },
        {
            title: "Student Registration & Login",
            description:
                "Secure registration and login system for students to manage their learning journey efficiently.",
            icon: "🔐",
        },
        {
            title: "Exam & Revision Support",
            description:
                "Special exam-focused sessions, revision materials, and practice questions for O/L and A/L students.",
            icon: "📝",
        },
        {
            title: "Progress Tracking",
            description:
                "Track student learning progress and performance to support better academic improvement.",
            icon: "📊",
        },
        {
            title: "Future System Integration",
            description:
                "Planned backend integration using MERN stack for dashboards, analytics, and role-based access.",
            icon: "⚙️",
        },
    ];

    return (
        <div className="min-h-screen bg-gray-100 py-16 px-6">
            <div className="max-w-6xl mx-auto text-center">

                <h1 className="text-4xl font-bold text-indigo-600 mb-4">
                    Our Services
                </h1>

                <p className="text-gray-600 mb-12">
                    We provide modern ICT education solutions designed for students from
                    Grade 6 to Advanced Level.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition"
                        >
                            <div className="text-4xl mb-4">{service.icon}</div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 text-sm">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}
