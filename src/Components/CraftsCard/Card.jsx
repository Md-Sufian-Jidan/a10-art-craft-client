import { useContext, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";

const Card = ({crafts}) => {
    const { isLoading } = useContext(AuthContext);
    if (isLoading) {
        return <span className="loading loading-bars loading-lg flex justify-center items-center my-10"></span>;
    }

    return (
        <div>
             <div className="card card-compact  bg-[#FEFAF6] shadow-xl mx-auto">
                    <figure><img src={`${crafts?.photo}`} alt="painting" className="w-[300px] h-[300px]" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Picture Name : {crafts?.name}</h2>
                        <h2 className="card-title">Picture Category : {crafts?.subCategory}</h2>
                        <h2 className="card-title">Rating : {crafts?.rating} </h2>
                        <p>{crafts?.description}</p>
                        <div className="card-actions justify-end">
                            <Link to={`/crafts/${crafts._id}`} className="btn bg-[#ECCA9C]">Read More</Link>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Card;