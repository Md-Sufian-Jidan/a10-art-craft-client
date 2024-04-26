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
      <h1 className="lg:text-5xl text-3xl font-bold">{loadedCraft.name}</h1>
      <h1 className="lg:text-3xl text-2xl font-bold">{loadedCraft.subCategory}</h1>
      <p className="py-6">{loadedCraft.description}</p>
      <p className="">Price : {loadedCraft.price} $</p>
      <p className="">Rating : {loadedCraft?.rating} </p>
      {/* <button className="btn btn-primary">Get Started</button> */}
    </div>
  </div>
</div>
        </div>
    );
};

export default CardDetails;