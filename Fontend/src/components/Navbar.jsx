import { NavLink } from "react-router-dom";
function Navbar() {
    return (
        <nav>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/lessons'>Lessons</NavLink>
            <NavLink to='/service'>Service</NavLink>
            <NavLink to='/aboutus'>About us</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
            <NavLink to='/register'>Register</NavLink>
            <NavLink to='/login'>Login</NavLink>

        </nav>
    )
}
export default Navbar;