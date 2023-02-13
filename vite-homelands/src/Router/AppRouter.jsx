import { Routes, Route } from "react-router-dom"
import Home from "../Pages/Home"
import Browse from "../Pages/Browse"

export default function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/Browse" element={<Browse />} />
        </Routes>
    )
}