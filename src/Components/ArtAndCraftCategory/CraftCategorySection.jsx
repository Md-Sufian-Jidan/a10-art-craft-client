import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";
// import { FaArrowDownLong } from "react-icons/fa6";

const CraftCategorySection = () => {
    const { isLoading } = useContext(AuthContext);
    if (isLoading) {
        <div className="text-5xl text-center my-28">Data is Coming...</div>
    }
    const loadedCrafts = useLoaderData();
    return (
        <div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 my-10">
                {
                    loadedCrafts?.map((craft) => {
                        return (
                            <div key={craft._id} className="card bg-slate-200 shadow-xl p-5 lg:mx-0 mx-10">
                                <figure>
                                    <img src={`${craft?.photo}`} alt="painting" className="lg:w-[300px] w-full h-[300px]" />
                                </figure>
                                <div className="space-y-3 text-left my-3 mt-auto">
                                    {/* <h2><span className='text-xl font-bold mt-3'>Picture Name</span> : {craft?.name}</h2> */}
                                    <h2><span className='text-xl font-bold my-1'>Subcategory Category </span>: {craft?.subCategory}</h2>
                                    <p className='flex items-center gap-2'>
                                        {/* <span className='text-xl font-bold my-1'>Rating</span> : */}
                                        {/* <span className='flex items-center gap-1'><FaStar /> {craft?.rating}</span> */}
                                        </p>
                                    {/* <p><span className='text-xl font-bold my-1'>Picture Description</span> : {craft?.description}</p> */}
                                    <div className="card-actions justify-end">
                                        <Link to={`/artCrafts/${craft._id}`} className="btn bg-[#72f1c1]">View Details</Link>
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

export default CraftCategorySection;