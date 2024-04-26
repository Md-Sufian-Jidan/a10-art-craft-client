import { Link, useLoaderData } from 'react-router-dom';

const AllCrafts = () => {
    const loadedCrafts = useLoaderData();

    return (
        <div className='my-5'>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Added By</th>
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
                                    <tr key={crafts._id} className="bg-blue-300 ">
                                        <th>{idx + 1}</th>
                                        <td>{crafts.userName}</td>
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