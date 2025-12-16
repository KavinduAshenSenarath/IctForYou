import { motion } from "framer-motion";
function Footer() {
    return (
        <footer className="bg-white text-gray-600">
            <div className="max-w-7xl mx-auto px-6 py-12 mt-3">
                <div className="flex flex-wrap justify-between gap-8">
                    <div className="flex-1 min-w-64">
                        <div>
                            <img src="logo.png" alt="LOGO" className="w-16 h-16 mb-4" />
                            <p className="text-gray-600 mb-3">Learn computer skill,coding,and Syllubus from Grade 6 to A/L. All in one place </p>
                            <div className="flex gap-4">
                                {[
                                    "footer-facebook.svg",
                                    "footer-twitter.svg",
                                    "footer-instagram.svg",
                                    "footer-youtube.svg",
                                ].map((icon, index) => (
                                    <motion.img
                                        key={index}
                                        src={icon}
                                        alt="social"
                                        className="w-10 h-10 cursor-pointer"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.15, duration: 0.4 }}
                                        whileHover={{
                                            scale: 1.15,
                                            rotate: 5,
                                        }}
                                        whileTap={{ scale: 0.9 }}
                                    />
                                ))}
                            </div>

                        </div>
                    </div>
                    <div className="flex-1 min-w-48">
                        <h3 className="text-blue-600 font-semibold mb-4 text-lg">Quick Links</h3>
                        <div className="flex flex-col gap-2">
                            <a href="#" className="hover:text-blue-500 transition">Home</a>
                            <a href="#" className="hover:text-blue-500 transition">About Us</a>
                            <a href="#" className="hover:text-blue-500 transition">Lessons</a>
                            <a href="#" className="hover:text-blue-500 transition">Services</a>
                            <a href="#" className="hover:text-blue-500 transition">Contact</a>
                        </div>

                    </div>
                    <div className="flex-1 min-w-48">
                        <h3 className="text-blue-600 text-lg font-semibold mb-4">Courses</h3>
                        <div className="flex flex-col gap-2">
                            <a href="#" className="hover:text-blue-500 transition">Grade 6-8</a>
                            <a href="#" className="hover:text-blue-500 transition">Grade 9-11</a>
                            <a href="#" className="hover:text-blue-500 transition">O/L ICT</a>
                            <a href="#" className="hover:text-blue-500 transition">A/L ICT</a>
                            <a href="#" className="hover:text-blue-500 transition">Coding Classes</a>
                        </div>
                    </div>

                    <div className="flex-1 min-w-64">
                        <h3 className="text-blue-600 text-lg font-semibold mb-4">Contact Us</h3>
                        <div className="flex flex-col gap-3">
                            <div className="flex items-start gap-3">

                                <img src="footer-location.svg" alt="location" className="w-6 h-6 mt-1" />
                                <p>kurunegala , Sri Lanka </p>

                            </div>
                            <div className="flex items-start gap-3">

                                <img src="footer-email.svg" alt="location" className="w-6 h-6 mt-1" />
                                <p>Kavinduashensenarath@gmail.com </p>

                            </div>
                            <div className="flex items-start gap-3">

                                <img src="footer-phone.svg" alt="location" className="w-6 h-6 mt-1" />
                                <p>+94 774820767 </p>

                            </div>
                        </div>
                    </div>

                </div>
                <div className="border-t border-blue-500">
                    <div className="max-w-7xl mx-auto px-6 py-4">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                            <p className="text-gray-400 text-sm">
                                &copy; 2025 Ashen Senarath. All rights reserved.
                            </p>
                            <div className="flex gap-6 text-sm">
                                <a href="#" className="text-gray-500 hover:text-blue-500 transition">
                                    Privacy Policy
                                </a>
                                <a href="#" className="text-gray-500 hover:text-blue-500 transition">
                                    Terms of Service
                                </a>
                                <a href="#" className="text-gray-500 hover:text-blue-500 transition">
                                    Cookie Policy
                                </a>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </footer>
    )
}
export default Footer;