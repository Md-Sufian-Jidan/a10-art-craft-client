import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Contexts/AuthProvider";
import { FaDollarSign } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { FaArrowDownLong } from "react-icons/fa6";

const MyCart = () => {
    const { user, isLoading } = useContext(AuthContext);
    console.log(user.email);
    const [items, setItem] = useState([]);
    // const [crafts, setCrafts] = useState();
    const [displayCraft, setDisplayCraft] = useState();

    useEffect(() => {
        fetch(`http://localhost:3000/myCrafts/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setItem(data);
                setDisplayCraft(data);
            });
    }, [user]);

    if (isLoading) {
        return <span className="loading loading-bars loading-2xl flex justify-center items-center"></span>;
    }
    const handleEdit = (id) => {
        console.log('edit btn clicked');
        fetch(`http://localhost:3000/crafts/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
            });
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
    };
    const price = displayCraft?.map((it) => it?.price)
    const ratingDes = displayCraft?.map((it) => it?.rating)
    //-------descending data
    const priceSort = price?.sort((a,b) => a - b);
    const ratingSort = ratingDes?.sort((a,b) => a - b);

    const handleSort = (filter) => {
        console.log('clicked');
        if(filter == priceSort){
            const remaining = displayCraft?.filter((book) => console.log(book?.price) == console.log(filter));
            const sort = remaining?.sort((rem1 , rem2) => rem1?.price - rem2?.price)
            console.log(sort);
            setDisplayCraft(sort)
        }
        else if (filter == ratingSort) {
            const remaining = displayCraft?.filter((book) => console.log(book.rating) == console.log(filter));
            const sort = remaining?.sort((rem1 , rem2) => rem2.rating - rem1.rating)
            console.log(sort);
            setDisplayCraft(sort)
        }
    }
    return (
        <div>
            <div>
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn m-1">Sort <FaArrowDownLong /></div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a onClick={() => handleSort(`${priceSort}`)}>Price</a></li>
                        <li><a onClick={() => handleSort(`${ratingSort}`)}>Rating</a></li>
                    </ul>
                </div>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 my-10">
                {
                    displayCraft?.map((item) => {
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
                                        <Link onClick={() => handleEdit(item?._id)} className="btn btn-success" to={`/update/${item?._id}`}>Update</Link>
                                        <button onClick={() => handleDelete(item?._id)} className="btn btn-primary">Delete</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default MyCart;