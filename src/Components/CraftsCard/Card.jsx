import PropTypes from 'prop-types';
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";
import { FaStar } from 'react-icons/fa';

const Card = ({ crafts }) => {
    const { isLoading } = useContext(AuthContext);
    if (isLoading) {
        return <span className="loading loading-bars loading-lg flex justify-center items-center my-10"></span>;
    }

    return (
            <div className="card bg-slate-200 shadow-xl p-5 lg:mx-0 mx-10">
                <figure>
                    <img src={`${crafts?.photo}`} alt="painting" className="lg:w-[300px] w-full h-[300px]" />
                </figure>
                <div className="space-y-3 text-left my-3 mt-auto">
                    <h2><span className='text-xl font-bold mt-3'>Picture Name</span> : {crafts?.name}</h2>
                    <h2><span className='text-xl font-bold my-1'>Picture Category </span>: {crafts?.subCategory}</h2>
                    <p className='flex items-center gap-2'>
                        <span className='text-xl font-bold my-1'>Rating</span> :
                        <span className='flex items-center gap-1'><FaStar /> {crafts?.rating}</span></p>
                    <p><span className='text-xl font-bold my-1'>Picture Description</span> : {crafts?.description}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/crafts/${crafts._id}`} className="btn bg-[#ECCA9C]">View Details</Link>
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