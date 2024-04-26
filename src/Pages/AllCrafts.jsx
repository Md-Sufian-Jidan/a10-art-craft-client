import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";
import { Link, useLoaderData } from 'react-router-dom';
import Swal from "sweetalert2";

const AllCrafts = () => {
    const loadedCrafts = useLoaderData();
    const [crafts , setCrafts] = useState(loadedCrafts);
    const handleEdit = () => {
        console.log('edit btn clicked');
    };
    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:3000/crafts/${id}`, {
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.modifiedCount > 0) {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your Added craft is deleted.",
                            icon: "success"
                          });
                          const remaining = crafts.filter((craft) => craft._id !== id);
                          setCrafts(remaining);
                    }
                })
            }
          });
        console.log('delete', id);
        
    }
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
                            <th>Update/Delete</th>
                            <th>Read More</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            crafts.map((crafts, idx) => {
                                return (
                                    <tr key={crafts._id} className="bg-blue-300 ">
                                        <th>{idx + 1}</th>
                                        <td>{crafts.userName}</td>
                                        <td>{crafts.price}</td>
                                        <td>{crafts.rating}</td>
                                        <td className="flex items-center justify-center gap-3">
                                            <Link to={`/update/${crafts._id}`}><FaEdit className="hover:text-[#F5DAD2] hover:scale-110" onClick={handleEdit} size={20} /></Link>
                                        <FaDeleteLeft className="hover:text-red-700 hover:scale-110" onClick={() =>handleDelete(crafts._id)} size={20} /></td>
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