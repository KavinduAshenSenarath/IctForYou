import { motion } from 'framer-motion'
export default function Home() {
    return (
        <div>
            <div className='flex pl-15 mt-5  gap-50 '>
                <div className='font-sans text-3xl font-bold '>
                    Your ICT Learning Journey <div className='text-blue-400'>
                        Start Here!
                    </div>
                    <div className='font-sans  font-medium text-sm mt-2 text-gray-500 '>Learn computer skills, coding, and technology from Grade 6 all the way to G.C.E. O/L and A/L <br></br>All in one place. Our lessons are carefully designed to follow <br></br>the Sri Lankan school ICT syllabus, making it easy for students to stay on track with what they learn at school.<br></br>
                        <br></br> Whether you are starting with basic computer skills or advancing to coding and digital technology <br></br> our platform provides structured, interactive, and engaging lessons.

                        <div className='flex mt-5 '>
                            <button className="bg-blue-500 w-36 h-10 rounded-2xl text-white hover:drop-shadow-[0_0_10px_#3b82f6] transition mt-2"> Enroll Now </button>
                            <div className='flex items-center gap-2'>
                                <button className="ml-5 p-2 rounded-full border border-transparent hover:border-blue-950 hover:border transition-all duration-300"> <img src="player.svg" alt="Play Icon" className="w-10 h-10 border border-transparent" /> </button>
                                <span className='text-gray-800 font-medium '>Watch Demo </span>
                            </div>
                        </div>
                    </div>
                </div>
                <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}><img src='Header.svg' alt='header section image ' className=''></img></motion.div>
            </div>
            <div className=''>
                <div className='flex gap-15'>
                    <motion.div whileHover={{ scale: 1.03, boxShadow: "0px 10px 20px rgba(0,0,0,0.15)" }}
                        transition={{ type: "spring", stiffness: 180, damping: 15 }} className=' flex w-100 h-27 ml-15 bg-white rounded-xl shadow-sm hover:shadow-md'>
                        <img src='book.svg' alt='book-clipart' className='w-17 h-17 m-3 mt-4'></img>
                        <div className='text-xl font-semibold text-gray-900'>
                            Syllabus-Based Lessons
                            <div className='text-gray-600 text-sm mt-1 leading-relaxed'>
                                Learn ICT from Grade 6 to A/L with simple lessons, clear examples, and practical activities.
                            </div>
                        </div>
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.03, boxShadow: "0px 10px 20px rgba(0,0,0,0.15)" }}
                        transition={{ type: "spring", stiffness: 180, damping: 15 }} className=' flex w-100 h-27 bg-white rounded-xl shadow-sm hover:shadow-md '>
                        <img src='time.svg' alt='book-clipart' className='w-17 h-17  m-3 mt-4'></img>
                        <div className='text-xl font-semibold text-gray-900'>
                            Interactive Lesson
                            <div className='text-gray-600 text-sm mt-1 leading-relaxed'>
                                Try quick quizzes and MCQs. Check answers instantly and learn fast.
                            </div>
                        </div>
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.03, boxShadow: "0px 10px 20px rgba(0,0,0,0.15)" }}
                        transition={{ type: "spring", stiffness: 180, damping: 15 }} className=' flex w-100 h-27  bg-white rounded-xl shadow-sm hover:shadow-md  '>
                        <img src='hour.svg' alt='book-clipart' className='w-17 h-17  m-3 mt-4'></img>
                        <div className='text-xl font-semibold text-gray-900'>
                            Anytime Anywhere
                            <div className='text-gray-600 text-sm mt-1 leading-relaxed'>
                                Access lessons anytime and learn ICT freely on any device.
                            </div>
                        </div>
                    </motion.div>
                </div>
                <div>
                </div>

            </div>
            <div className='flex  gap-15'>
                <motion.div whileHover={{ scale: 1.03, boxShadow: "0px 10px 20px rgba(0,0,0,0.15)" }}
                    transition={{ type: "spring", stiffness: 180, damping: 15 }} className=' flex w-100 h-27 ml-15 mt-4  bg-white rounded-xl shadow-sm hover:shadow-md'>
                    <img src='exame.svg' alt='book-clipart' className='w-17 h-17 m-3 mt-4'></img>
                    <div className='text-xl font-semibold text-gray-900'>
                        Exam Revision
                        <div className='text-gray-600 text-sm mt-1 leading-relaxed'>
                            Revise easily with summaries, practice questions, and exam-focused notes.
                        </div>
                    </div>
                </motion.div>

                <motion.div whileHover={{ scale: 1.03, boxShadow: "0px 10px 20px rgba(0,0,0,0.15)" }}
                    transition={{ type: "spring", stiffness: 180, damping: 15 }} className=' flex w-100 h-27  mt-4  bg-white rounded-xl shadow-sm hover:shadow-md'>
                    <img src='download.svg' alt='book-clipart' className='w-17 h-17 m-3 mt-4'></img>
                    <div className='text-xl font-semibold text-gray-900'>
                        Notes & Downloads
                        <div className='text-gray-600 text-sm mt-1 leading-relaxed'>
                            Access summaries and revision materials made for students from Grade 6 to A/L.
                        </div>
                    </div>
                </motion.div>

                <motion.div whileHover={{ scale: 1.03, boxShadow: "0px 10px 20px rgba(0,0,0,0.15)" }}
                    transition={{ type: "spring", stiffness: 180, damping: 15 }} className=' flex w-100 h-27  mt-4  bg-white rounded-xl shadow-sm hover:shadow-md'>
                    <img src='games.svg' alt='book-clipart' className='w-17 h-17  m-3 mt-4'></img>
                    <div className='text-xl font-semibold text-gray-900'>
                        Fun Learning Tools
                        <div className='text-gray-600 text-sm mt-1 leading-relaxed'>
                            Use games, puzzles, and challenges to make ICT learning enjoyable.
                        </div>
                    </div>
                </motion.div>
            </div>
            <div className='text-3xl font-sans font-extrabold text-center mt-10'>
                Browse our Best<span className='text-blue-500'> Lessons </span>
            </div>
            <div className='flex gap-60 mt-10 '>
                <div className='bg-gray-400 w-70 h-100 ml-15 rounded-xl'>

                </div>
                <div className='bg-stone-400 w-70 h-100 rounded-xl'>

                </div>
                <div className='bg-gray-400 w-70 h-100 rounded-xl'>

                </div>
            </div>
        </div>
    );
}