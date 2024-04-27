import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Fade, JackInTheBox, Slide, Zoom } from "react-awesome-reveal";

const Register = () => {
    // show password
    const [show, setShow] = useState(false);
    const { createUser, setUser } = useContext(AuthContext);
    const handleRegister = (e) => {
        e.preventDefault();
        // console.log('register ');
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        const user = { name, email, photo, password };
        // console.log(user);
        if (password.length < 6) {
            return toast.error('your password should at least 6 character long');
        }
        if (!/[A-Z]/.test(password)) {
            return toast.error('Your password should contain a Capital letter')
        }
        if (!/[a-z]/.test(password)) {
            return toast.error('Your password should contain a lower letter')
        }
        createUser(email, password)
            .then((result) => {
                console.log(result.user);
                if (result.user) {
                    setUser(result?.user);
                    return toast.success('User Created Successfully')
                }
            })
            .catch((error) => {
                console.log(error);
                return toast.error('Something Wrong reload the page')
            })
    }
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <Slide direction="down" duration={1500}>
                        <h1 className="text-5xl font-bold">Register now!</h1>
                    </Slide>
                </div>
                <Zoom duration={1500}>
                    <div className="card shrink-0 max-w-sm shadow-2xl bg-[#BACD92]">
                        <form onSubmit={handleRegister} className="card-body">
                            <Slide duration={2000} direction="down">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
                                </div>
                            </Slide>
                            <Slide duration={2100} direction="right">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                                </div>
                            </Slide>
                            <Slide duration={2200} direction="left">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo Url</span>
                                    </label>
                                    <input type="text" placeholder="Photo Url" name="photo" className="input input-bordered" required />
                                </div>
                            </Slide>
                            <Slide duration={2300} direction="right">
                                <div className="form-control relative">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type={show ? 'text' : 'password'} placeholder="password" name="password" className="input input-bordered" required />
                                    <span className="absolute top-[52px] right-3" onClick={() => setShow(!show)}>
                                        {show ?
                                            <FaEye /> :
                                            <FaEyeSlash />
                                        }
                                    </span>
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                            </Slide>
                            <Slide duration={2500} direction="up">
                                <div className="form-control mt-6">
                                    <button className="btn bg-[#75A47F]">Register</button>
                                </div>
                                <p>All Ready Have An Account? <Link
                                    className="underline" to="/login"
                                >Login</Link></p>
                            </Slide>
                        </form>
                    </div>
                </Zoom>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Register;