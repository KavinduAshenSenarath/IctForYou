import { navigate } from "react-router-dom";
export default function PrivateRoutes({ children }) {
    const token = localStorage.getItem("token")
    if (!token) {
        return <navigate to="/login/" />
    }
    return children;
}