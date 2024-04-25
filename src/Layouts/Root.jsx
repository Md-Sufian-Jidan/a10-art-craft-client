import { Outlet } from "react-router-dom";
import Navbar from "../Components/Header/Navbar";
import Footer from "../Components/Footer/Footer";

const Root = () => {
    return (
        <div>
            <div className="h-20">
                <Navbar />
            </div>
            <Outlet />
            <Footer />
        </div>
    );
};

export default Root;