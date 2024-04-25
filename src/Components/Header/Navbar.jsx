import { NavLink } from "react-router-dom";

const Navbar = () => {
    const navLinks = <>
        <NavLink className={({ isActive }) => isActive ? 'btn bg-red-300 mx-1' : 'btn hover:bg-green-300 hover:font-extrabold hover:text-lg mx-1'} to="/">Home</NavLink>
        <NavLink className={({ isActive }) => isActive ? 'btn bg-red-300 mx-1' : 'btn hover:bg-green-300 hover:font-extrabold hover:text-lg mx-1'} to="/allProduct">All Product</NavLink>
        <NavLink className={({ isActive }) => isActive ? 'btn bg-red-300 mx-1' : 'btn hover:bg-green-300 hover:font-extrabold hover:text-lg mx-1'} to="/addProduct">Add Product</NavLink>
        <NavLink className={({ isActive }) => isActive ? 'btn bg-red-300 mx-1' : 'btn hover:bg-green-300 hover:font-extrabold hover:text-lg mx-1'} to="/myCart">My Cart</NavLink>
        <NavLink className={({ isActive }) => isActive ? 'btn bg-red-300 mx-1' : 'btn hover:bg-green-300 hover:font-extrabold hover:text-lg mx-1'} to="/register">Register</NavLink>
    </>
    return (
        <div className="p-0">
            <div className="navbar max-w-6xl lg:mx-8 bg-purple-300 rounded-lg z-10">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">web name</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Login</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;