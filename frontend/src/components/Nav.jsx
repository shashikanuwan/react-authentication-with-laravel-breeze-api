import { Link, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import ForgotPassword from "../pages/ForgotPassword";
import ResetPassword from "../pages/ResetPassword";

function Nav() {
    return (
        <div>
            <div class="text-gray-400 bg-gray-900 body-font">
                <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">

                    <Link to="/" class="flex title-font font-medium items-center text-white mb-4 md:mb-0">
                        <span class="ml-3 text-xl">COMPANY NAME</span>
                    </Link>

                    <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                        <Link to="/" active-class="active" class="nav-Link mr-5 hover:text-white">Home</Link>
                        <Link to="register" class="nav-Link mr-5 hover:text-white">Register</Link>
                        <Link to="login" class="nav-Link mr-5 hover:text-white">Login</Link>
                        <Link to="dashboard" class="nav-Link mr-5 hover:text-white">Dashboard</Link>
                    </nav>
                </div>
            </div >

            <div className="max-w-7xl mx-auto mt-6">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/forgot-password" element={<ForgotPassword />} />
                    <Route path="/reset-password" element={<ResetPassword />} />
                </Routes>
            </div>
        </div >
    )
}

export default Nav