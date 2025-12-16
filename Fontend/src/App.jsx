import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./Page/About";
import Contact from "./Page/Contact";
import Home from "./Page/Home";
import Lessons from "./Page/Lessons";
import Login from "./Page/Login";
import Register from "./Page/Register";
import Service from "./Page/Service";
import Footer from "./components/Footer";

function App() {


  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lessons" element={<Lessons />} />
        <Route path="/service" element={<Service />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
