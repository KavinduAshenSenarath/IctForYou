import { NavLink } from "react-router-dom";
import { FaSearch, FaUser } from "react-icons/fa";

function Navbar() {
    return (
        <nav className="w-full bg-gray-200 px-6 py-3 flex items-center justify-between shadow">


            <div className="flex items-center gap-6">

                {/* LOGO */}
                <img
                    src="logo.png"
                    alt="Logo"
                    className="w-14 h-14 object-contain mr-50 ml-10"
                />


                <div className="flex items-center bg-white rounded-full px-4 py-2 w-[280px] md:w-[450px]">
                    <FaSearch className="text-black text-xl mr-3" />
                    <input
                        type="text"
                        placeholder="Search Your Lessons"
                        className="w-full outline-none pr-10"
                    />
                </div>
            </div>

            {/* RIGHT — Menu + Buttons */}
            <div className="flex items-center gap-6 text-sm">

                <NavLink to="/" className={({ isActive }) =>
                    isActive ? "font-semibold text-blue-700" : "hover:text-blue-600"
                }>
                    Home
                </NavLink>

                <NavLink to="/lessons" className={({ isActive }) =>
                    isActive ? "font-semibold text-blue-700" : "hover:text-blue-600"
                }>
                    Lessons
                </NavLink>

                <NavLink to="/service" className={({ isActive }) =>
                    isActive ? "font-semibold text-blue-700" : "hover:text-blue-600"
                }>
                    Services
                </NavLink>

                <NavLink to="/aboutus" className={({ isActive }) =>
                    isActive ? "font-semibold text-blue-700" : "hover:text-blue-600"
                }>
                    About us
                </NavLink>

                <NavLink to="/contact" className={({ isActive }) =>
                    isActive ? "font-semibold text-blue-700" : "hover:text-blue-600"
                }>
                    Contact
                </NavLink>

                {/* REGISTER BUTTON */}
                <NavLink
                    to="/register"
                    className="px-5 py-2 border border-blue-400 rounded-full hover:bg-blue-50 transition"
                >
                    Register
                </NavLink>

                {/* LOGIN BUTTON */}
                <NavLink
                    to="/login"
                    className="px-5 py-2 bg-blue-900 text-white rounded-full flex items-center gap-2 hover:bg-blue-800 transition mr-10"
                >
                    <FaUser />
                    Login
                </NavLink>

            </div>
        </nav>
    );
}

export default Navbar;
