import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav className="flex gap-6 p-4 bg-gray-200">
            <NavLink to="/" className={({ isActive }) => isActive ? "font-bold underline" : ""}>Home</NavLink>
            <NavLink to="/lessons" className={({ isActive }) => isActive ? "font-bold underline" : ""}>Lessons</NavLink>
            <NavLink to="/service" className={({ isActive }) => isActive ? "font-bold underline" : ""}>Service</NavLink>
            <NavLink to="/aboutus" className={({ isActive }) => isActive ? "font-bold underline" : ""}>About us</NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? "font-bold underline" : ""}>Contact</NavLink>
            <NavLink to="/register" className={({ isActive }) => isActive ? "font-bold underline" : ""}>Register</NavLink>
            <NavLink to="/login" className={({ isActive }) => isActive ? "font-bold underline" : ""}>Login</NavLink>
        </nav>
    );
}

export default Navbar;
