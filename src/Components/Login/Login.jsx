import { useContext, useState } from "react";
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";
import { toast } from "react-toastify";

const Login = () => {
    // show password
    const [show, setShow] = useState(false);
    const { isLoading, googleLogin, githubLogin, signInUser } = useContext(AuthContext);
    if (isLoading) {
        <span className="loading loading-bars loading-lg"></span>
    }

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signInUser(email, password)
            .then((result) => {
                console.log(result.user);
                return toast.success('User Login Successfully');
            })
            .catch((error) => {
                console.log(error);
                return toast.error('opps! Something wrong please reload the page and try again')
            })
    }

    //google login
    const handleGoogleLogin = () => {
        googleLogin()
            .then((result) => {
                console.log(result.user);
                return toast.success('User Login Successfully')
            })
            .catch((error) => {
                console.log(error);
                return toast.error('Opps! Something wrong please reload the page')
            })
    };
    //github login
    const handleGithubLogin = () => {
        githubLogin()
            .then((result) => {
                console.log(result.user);
                return toast.success('User Login Successfully')
            })
            .catch((error) => {
                console.log(error);
                return toast.error('Opps! Something wrong please reload the page')
            })
    };
    return (
        <div className="md:w-1/2 w-3/4 mx-auto my-3" >
            <form onSubmit={handleLogin} className="bg-blue-200 p-10  rounded-2xl" data-aos="zoom-in" data-aos-duration="1000">
                <div className="form-control" data-aos="fade-right" data-aos-duration="2000">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" name="email" className="input input-bordered" />
                </div>
                <div className="form-control relative" data-aos="fade-left" data-aos-duration="2000">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type={show ? 'text' : 'password'} placeholder="password" name="password" className="input input-bordered" />
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
                <div className="form-control my-3" data-aos="fade-right" data-aos-duration="2000">
                    <button className="btn bg-[#adf010]">Login</button>
                </div>
                <p>Do not Have An Account? <Link className="underline" to="/register">Register One</Link></p>
            </form>
            <div className="divider">Or</div>
            <div onClick={handleGoogleLogin} className="flex items-center gap-3 btn text-xl my-2">
                <FaGoogle size={20} />
                <span>Google Login</span>
            </div>
            <div onClick={handleGithubLogin} className="flex items-center gap-3 btn text-xl my-2">
                <FaGithub size={20} />
                <span>Github Login</span>
            </div>
        </div>
    );
};

export default Login;