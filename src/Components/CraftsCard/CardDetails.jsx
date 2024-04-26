import { useLoaderData } from "react-router-dom";

const CardDetails = () => {
    const loadedCraft = useLoaderData();
    console.log(loadedCraft);
    return (
        <div className="my-10 rounded">
           <div className="hero min-h-screen bg-indigo-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src={`${loadedCraft.photo}`} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-xl font-semibold"><span className="lg:text-5xl text-2xl font-bold">Picture Name</span> : {loadedCraft.name}</h1>
      <h1 className="text-xl font-semibold"><span className="lg:text-3xl text-2xl font-bold">Picture Category</span> : {loadedCraft.subCategory}</h1>

      <p className="p-3 font-semibold"><span className="text-xl font-bold">Description</span> : {loadedCraft.description}</p>

      <div className="flex justify-around items-center p-3">
      <p className="text-start font-semibold"><span className="text-xl font-bold ">Price</span> : {loadedCraft.price} $</p>
      <p className="text-start font-semibold"><span className="text-xl font-bold">Rating</span> : {loadedCraft?.rating} </p>
      </div>

      <p className="font-semibold py-3"><span className="text-2xl font-bold">Author</span> : {loadedCraft.userName}</p>
      {/* <button className="btn btn-primary">Get Started</button> */}
    </div>
  </div>
</div>
        </div>
    );
};

export default CardDetails;