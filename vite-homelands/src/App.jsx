import { Route, Routes } from "react-router-dom"
import Footer from "./Components/Footer"
import Header from "./Components/Header"
import Slider from "./Components/ImgSlider"
import AppRouter from "./Router/AppRouter"

export default function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={ <Slider />}/>
            </Routes>
            <AppRouter/>
            <Footer />
        </>
    )
}
