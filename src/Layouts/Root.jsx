import { Outlet } from "react-router-dom";
import Navbar from "../Components/Header/Navbar";
import Footer from "../Components/Footer/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css'

const Root = () => {
    return (
        <div>
            <div className="h-20">
                <Navbar />
            </div>
            <div className="max-w-6xl mx-auto">
            <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Root;