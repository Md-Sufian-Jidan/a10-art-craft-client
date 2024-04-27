import { useContext } from 'react';
import { Link, useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';

const AllCrafts = () => {
    const { user } = useContext(AuthContext);
    const loadedCrafts = useLoaderData();
    const location = useLocation();
    const navigate = useNavigate();
    if(user) {
        navigate(location?.state ? location?.state : '/')
    }

    return (
        <div className='my-5'>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className='text-xl font-bold'>
                            <th></th>
                            <th>Craft Name</th>
                            <th>Sub Category</th>
                            <th>Price</th>
                            <th>Rating</th>
                            <th>Read More</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            loadedCrafts.map((crafts, idx) => {
                                return (
                                    <tr key={crafts._id} className="bg-[rgb(187,148,103)] ">
                                        <th>{idx + 1}</th>
                                        <td>{crafts.name}</td>
                                        <td>{crafts.subCategory}</td>
                                        <td>{crafts.price} $</td>
                                        <td>{crafts.rating}</td>
                                        <td><Link className="btn bg-green-200" to={`/crafts/${crafts._id}`}>View Details</Link></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllCrafts;