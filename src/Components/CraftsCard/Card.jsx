import PropTypes from 'prop-types';
import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";

const Card = ({ crafts }) => {
    const { isLoading } = useContext(AuthContext);
    if (isLoading) {
        return <span className="loading loading-bars loading-lg flex justify-center items-center my-10"></span>;
    }

    return (
        <div>
            <div className="card bg-slate-200 shadow-xl mx-auto">
                <figure>
                    <img src={`${crafts?.photo}`} alt="painting" className="w-[300px] h-[300px]" />
                </figure>
                <div className="card-body">
                    <h2><span className='lg:text-xl font-bold'>Picture Name</span> : {crafts?.name}</h2>
                    <h2><span className='lg:text-xl font-bold'>Picture Category </span>: {crafts?.subCategory}</h2>
                    <h2><span className='lg:text-xl font-bold'>Rating</span> : {crafts?.rating} </h2>
                    <p><span className='lg:text-xl font-bold'>Picture Description</span> : {crafts?.description}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/crafts/${crafts._id}`} className="btn bg-[#ECCA9C]">View Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
Card.propTypes = {
    children: PropTypes.object,
    crafts: PropTypes.object
};
export default Card;