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
        </div>
    );
}