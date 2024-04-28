import { useLoaderData } from "react-router-dom";

const CraftDetails = () => {
    const loadedCraft = useLoaderData();
    console.log(loadedCraft);
    return (
        <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-10 bg-[rgb(216,139,139)] p-5 lg:p-10 my-10 rounded w-full">
      <div>
        <img className="lg:w-[500px] h-[400px]  w-full" src={loadedCraft?.photo} alt="" />
      </div>
      <div className="lg:w-1/2">
        <div className="text-xl font-semibold space-y-3">
        <h1><span className="lg:text-4xl text-2xl font-bold">Picture Name</span> : {loadedCraft.name}</h1>
        <h3><span className="lg:text-3xl text-2xl font-bold">Picture Category</span> : {loadedCraft.subCategory}</h3>
        <p><span className="text-2xl font-bold">Description</span> : {loadedCraft.description}</p>
        </div>
        <div className="flex justify-between items-center p-3">
          <p className="text-start font-semibold"><span className="text-xl font-bold ">Price</span> : {loadedCraft.price} $</p>
          <p className="text-start font-semibold"><span className="text-xl font-bold">Rating</span> : {loadedCraft?.rating} </p>
          <p className="text-start font-semibold"><span className="text-xl font-bold">Customization</span> : {loadedCraft?.customization}</p>
        </div>
        <p className="font-semibold py-3 text-center"><span className="text-2xl font-bold">Author</span> : {loadedCraft.userName}</p>
      </div>
    </div>
    );
};

export default CraftDetails;