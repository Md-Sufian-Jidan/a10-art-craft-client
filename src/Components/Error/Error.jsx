import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div>
            <img src="https://i.imgur.com/25w6XUH.jpeg" alt="" />
            {/* <img src="/public/images/3828537.jpg" alt="" /> */}
            <Link className="btn w-1/2 my-5 text-center mx-auto hover:bg-green-300" to="/">Go Back To Home</Link>
        </div>
    );
};

export default Error;