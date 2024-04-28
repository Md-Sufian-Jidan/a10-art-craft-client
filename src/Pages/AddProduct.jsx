import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthProvider";
import Swal from "sweetalert2";

const AddProduct = () => {
  const {isLoading, user} = useContext(AuthContext);
  if(isLoading) {
    return <span className="loading loading-bars loading-2xl flex justify-center items-center"></span>;
  }
  console.log(user.displayName);
  const handleAddCraft = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const subCategory = form.subCategory.value;
    const description = form.description.value;
    const price = form.price.value;
    const processTime = form.processTime.value;
    const stock = form.stock.value;
    const userName = form.userName.value;
    const userEmail = form.userEmail.value;
    const customization = form.customization.value;
    const photo = form.photo.value;
    const user ={name, subCategory, description, price,processTime,stock,userName, userEmail, customization, photo};
    console.log(user);
    fetch('https://assignment-10-server-one-eta.vercel.app/crafts', {
      method:'POST',
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then((res) => res.json())
    .then(data => {
      console.log(data);
      if(data.insertedId) {
        Swal.fire({
          title: 'Success!',
          text: 'Craft Save Successfully',
          icon: 'success',
          confirmButtonText: 'ok'
        });
        form.reset();
      }
    })
  };
  return (
    <div className="bg-[#e1f1cb] lg:p-20 p-7 rounded my-5">
      <h2 className="text-3xl text-center font-extrabold">Add a Craft</h2>
      <form onSubmit={handleAddCraft} className="md:w-1/2 mx-auto">
        {/* from name and quantity row */}
        <div className="md:flex gap-5 mb-5">
          <div className="from-control md:w-1/2">
            <label className="label">
              <span className="label-text">Craft Name</span>
            </label>
            <label className="input-group">
              <input type="text" placeholder="Craft Name"
                name="name" className="input input-bordered w-full" required />
            </label>
          </div>
          <div className="from-control md:w-1/2">
            <label className="label">
              <span className="label-text">Sub category</span>
            </label>
            <label className="input-group">
              <input type="text" placeholder="sub-category"
                name="subCategory"
                className="input input-bordered w-full" required />
            </label>
          </div>
        </div>
        {/* from supplier row 2 */}
        <div className="md:flex gap-5 mb-5">
          <div className="from-control md:w-1/2">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <label className="input-group">
              <input type="text" placeholder="Description"
                name="description" className="input input-bordered w-full" required />
            </label>
          </div>
          <div className="from-control md:w-1/2">
            <label className="label">
              <span className="label-text">price</span>
            </label>
            <label className="input-group">
              <input type="text" placeholder="price"
                name="price"
                className="input input-bordered w-full" required />
            </label>
          </div>
        </div>
        {/* from catagory row 3 */}
        <div className="md:flex gap-5 mb-5">
          <div className="from-control md:w-1/2">
            <label className="label">
              <span className="label-text">rating</span>
            </label>
            <label className="input-group">
              <input type="text" placeholder="Rating"
                name="rating" className="input input-bordered w-full" required />
            </label>
          </div>
          <div className="from-control md:w-1/2">
            <label className="label">
              <span className="label-text">Process Time</span>
            </label>
            <label className="input-group">
              <input type="text" placeholder="Process Time"
                name="processTime" className="input input-bordered w-full" required />
            </label>
          </div>
        </div>
        {/* from row 4 */}
        <div className="md:flex items-center gap-5 mb-5">
          <div className="from-control md:w-1/2">
            <label className="label">
              <span className="label-text">Stock Status</span>
            </label>
            <label className="input-group">
              <input type="text" placeholder="Stock Status"
                name="stock" className="input input-bordered w-full" required />
            </label>
          </div>
          <div className="from-control md:w-1/2">
            <label className="label">
              <span className="label-text">Customization</span>
            </label>
            <label className="input-group">
              <input type="text" placeholder="Yes Or No"
                name="customization" className="input input-bordered w-full" required />
            </label>
          </div>
        </div>
        {/* from row 5 */}
        <div className="md:flex gap-5 mb-5">
          <div className="from-control md:w-1/2">
            <label className="label">
              <span className="label-text">User Name</span>
            </label>
            <label className="input-group">
              <input type="text" placeholder="User Name"
                name="userName" defaultValue={user.displayName} className="input input-bordered w-full" required />
            </label>
          </div>
          <div className="from-control md:w-1/2">
            <label className="label">
              <span className="label-text">User Email</span>
            </label>
            <label className="input-group">
              <input type="text" placeholder="User Email"
                name="userEmail" defaultValue={user.email} className="input input-bordered w-full" required />
            </label>
          </div>
        </div>
        {/* from photo url row 6 */}
        <div className="mb-5">
          <div className="from-control w-full">
            <label className="label">
              <span className="label-text">Photo Url</span>
            </label>
            <label className="input-group">
              <input type="text" placeholder="Photo Url"
                name="photo"
                className="input input-bordered w-full" required />
            </label>
          </div>
          <input type="submit" value="Add Craft" className="btn bg-[#77B0AA] w-full my-5" />
        </div>
      </form>
    </div>
  );
};

export default AddProduct;