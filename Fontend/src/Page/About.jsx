import React from 'react';

export default function AboutUs() {
    return (
        <div className="bg-gray-50">

            <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold mb-4">About US</h1>
                        <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                            Empowering students with essential ICT skills from Grade 6 to A/L,
                            making technology education accessible and engaging for everyone.
                        </p>
                    </div>
                </div>
            </section>


            <section className="py-16">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-wrap gap-8">


                        <div className="flex-1 min-w-80 bg-white rounded-2xl shadow-lg p-8">
                            <div className="flex items-center mb-4">
                                <div className="bg-blue-100 p-3 rounded-full mr-4">
                                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h2 className="text-3xl font-bold text-gray-800">Our Mission</h2>
                            </div>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                To provide high-quality ICT education that empowers students with
                                the knowledge and skills needed to excel in the digital age. We aim
                                to make learning interactive, fun, and aligned with the Sri Lankan
                                school curriculum.
                            </p>
                        </div>


                        <div className="flex-1 min-w-80 bg-white rounded-2xl shadow-lg p-8">
                            <div className="flex items-center mb-4">
                                <div className="bg-indigo-100 p-3 rounded-full mr-4">
                                    <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                </div>
                                <h2 className="text-3xl font-bold text-gray-800">Our Vision</h2>
                            </div>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                To become Sri Lanka's leading online ICT education platform,
                                inspiring the next generation of tech-savvy students and preparing
                                them for future careers in technology and innovation.
                            </p>
                        </div>

                    </div>
                </div>
            </section>


            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">What We Offer</h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            Comprehensive ICT education designed for Sri Lankan students
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-6">

                        <div className="flex-1 min-w-72 bg-gray-50 rounded-xl p-6 hover:shadow-lg transition">
                            <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Syllabus-Based Lessons</h3>
                            <p className="text-gray-600">
                                Learn ICT from Grade 6 to A/L with simple lessons, clear examples,
                                and practical activities.
                            </p>
                        </div>

                        <div className="flex-1 min-w-72 bg-gray-50 rounded-xl p-6 hover:shadow-lg transition">
                            <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Interactive Quizzes</h3>
                            <p className="text-gray-600">
                                Try quick quizzes and MCQs. Check answers instantly and learn fast
                                with immediate feedback.
                            </p>
                        </div>
                        <div className="flex-1 min-w-72 bg-gray-50 rounded-xl p-6 hover:shadow-lg transition">
                            <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Learn Anytime</h3>
                            <p className="text-gray-600">
                                Access lessons anytime and learn ICT freely on any device -
                                phone, tablet, or computer.
                            </p>
                        </div>

                        <div className="flex-1 min-w-72 bg-gray-50 rounded-xl p-6 hover:shadow-lg transition">
                            <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Exam Preparation</h3>
                            <p className="text-gray-600">
                                Revise easily with summaries, practice questions, and exam-focused
                                notes for O/L and A/L.
                            </p>
                        </div>
                        <div className="flex-1 min-w-72 bg-gray-50 rounded-xl p-6 hover:shadow-lg transition">
                            <div className="bg-pink-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Fun Learning Tools</h3>
                            <p className="text-gray-600">
                                Use games, puzzles, and challenges to make ICT learning enjoyable
                                and memorable.
                            </p>
                        </div>
                        <div className="flex-1 min-w-72 bg-gray-50 rounded-xl p-6 hover:shadow-lg transition">
                            <div className="bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Notes & Downloads</h3>
                            <p className="text-gray-600">
                                Access summaries and revision materials made for students from
                                Grade 6 to A/L.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">
                        Ready to Start Learning?
                    </h2>
                    <p className="text-gray-600 text-lg mb-8">
                        Join thousands of students already learning ICT with ICT4you
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <button className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition">
                            Register Now
                        </button>
                        <button className="bg-gray-200 text-gray-700 px-8 py-3 rounded-xl font-semibold hover:bg-gray-300 transition">
                            Browse Lessons
                        </button>
                    </div>
                </div>
            </section>

        </div>
    );
}