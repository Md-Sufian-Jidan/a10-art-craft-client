import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";


const Register = () => {
    // show password
    const [show, setShow] = useState(false);
    return (
        <div className="hero min-h-screen bg-[#F5DAD2]" data-aos="zoom-in" data-aos-duration="1000">
            <div className="hero-content flex-col" data-aos="zoom-out" data-aos-delay="1500">
                <div className="text-center lg:text-left" data-aos="fade-right" data-aos-delay="2000">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-[#BACD92]">
                    <form className="card-body" data-aos="fade-down" data-aos-delay="2500">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name" className="input input-bordered" required />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo Url</span>
                            </label>
                            <input type="text" placeholder="Photo Url" className="input input-bordered" required />
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type={show ? 'text' : 'password'} placeholder="password" className="input input-bordered" required />
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
                        <div className="form-control mt-6">
                            <button className="btn bg-[#75A47F]">Register</button>
                        </div>
                        <p>All Ready Have An Account? <Link
                            className="underline" to="/login"
                            >Login</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;