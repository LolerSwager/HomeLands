import { Routes, Route } from "react-router-dom"
import Home from "../Pages/Home"
import Browse from "../Pages/Browse"
import Login from "../Pages/Login"

export default function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/browse" element={<Browse />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    )
}