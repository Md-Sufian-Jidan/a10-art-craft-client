import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Contexts/AuthProvider";
import { FaDollarSign } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import Swal from "sweetalert2";

const MyCart = () => {
    const { user, isLoading } = useContext(AuthContext);
    console.log(user.email);
    const [items, setItem] = useState([]);
    const [crafts, setCrafts] = useState();

    useEffect(() => {
        fetch(`http://localhost:3000/myCrafts/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setItem(data);
            });
    }, [user]);

    if (isLoading) {
        return <span className="loading loading-bars loading-2xl flex justify-center items-center"></span>;
    }
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
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 my-10">
            {
                items?.map((item) => {
                    return (
                        <div key={item._id} className="card bg-[#F0EBE3] shadow-xl mx-auto">
                            <figure className="px-10 pt-10">
                                <img src={item?.photo} alt="Shoes" className="rounded-xl h-[250px] w-[400px]" />
                            </figure>
                            <div className="card-body">
                                <h2 className="text-xl font-semibold my-2">Craft Name : {item?.name}</h2>
                                <p className="text-xl font-semibold my-2">Description: {item?.description}</p>
                                <div className="flex justify-around items-center gap-3">
                                    <p className="text-xl font-semibold flex items-center gap-2">Price: {item?.price}<FaDollarSign /></p>
                                    <p className="text-xl font-semibold flex items-center gap-2">Rating: {item?.rating} <FaStar className="text-gold-500" /></p>
                                </div>
                                <p className="text-xl font-semibold my-3">{item?.stock}</p>
                                <div className="card-actions flex justify-between">
                                    <button className="btn btn-success">Update</button>
                                    <button onClick={() => handleDelete(item._id)}  className="btn btn-primary">Delete</button>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default MyCart;
// _id
// 662b2dae9314864f47557b03
// name
// "Sunset Over the Mountains"
// subCategory
// "Landscape Painting"
// description
// "Capture the beauty of nature with this stunning landscape painting dep…"
// price
// "150"
// userName
// "Md jidan Jiyaj"
// userEmail
// "jidanjiyaj03@gmail.com"
// yes
// false
// no
// false
// photo
// "https://i.imgur.com/9yr2uTM.jpeg"
// rating
// "4.9"
// stock
// "In Stock"
// processTime
// "1 week"