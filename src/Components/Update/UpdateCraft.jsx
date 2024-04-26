import { useContext } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";
import Swal from "sweetalert2";

const UpdateCraft = () => {
    const loadedCraft = useLoaderData();
    console.log(loadedCraft);
    const { user } = useContext(AuthContext);
    const { id } = useParams()
    console.log(id);

    const handleUpdate = (e) => {
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
        const yes = form.yes.checked;
        const no = form.no.checked;
        const photo = form.photo.value;
        const user = { name, subCategory, description, price, processTime, stock, userName, userEmail, yes, no, photo };
        console.log(user);
        fetch(`http://localhost:3000/crafts/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then((res) => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Craft Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'ok'
                    });
                    form.reset();
                }
            })
    }


    return (
        <div className="bg-[#dfcccc] lg:p-20 p-7 rounded">
            <h2 className="text-3xl text-center font-extrabold">Update the Craft</h2>
            <form onSubmit={handleUpdate} className="md:w-1/2 mx-auto">
                {/* from name and quantity row */}
                <div className="md:flex gap-5 mb-5">
                    <div className="from-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Craft Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" defaultValue={loadedCraft.name} placeholder="Craft Name"
                                name="name" className="input input-bordered w-full" required />
                        </label>
                    </div>
                    <div className="from-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Sub category</span>
                        </label>
                        <label className="input-group">
                            <input type="text" defaultValue={loadedCraft.subCategory} placeholder="sub-category"
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
                            <input type="text" defaultValue={loadedCraft.description} placeholder="Description"
                                name="description" className="input input-bordered w-full" required />
                        </label>
                    </div>
                    <div className="from-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" defaultValue={loadedCraft.price} placeholder="price"
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
                            <input type="text" defaultValue={loadedCraft.rating} placeholder="Rating"
                                name="rating" className="input input-bordered w-full" required />
                        </label>
                    </div>
                    <div className="from-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Process Time</span>
                        </label>
                        <label className="input-group">
                            <input type="text" defaultValue={loadedCraft.processTime} placeholder="Process Time"
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
                            <input type="text" defaultValue={loadedCraft.stock} placeholder="Stock Status"
                                name="stock" className="input input-bordered w-full" required />
                        </label>
                    </div>
                    <div className="from-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Customization</span>
                            <div className="flex gap-5">
                                <label className="flex items-center gap-2">
                                    <span>Yes</span>
                                    <input type="radio" name="yes" id="" />
                                </label>
                                <label className="flex items-center gap-2">
                                    <span>No</span>
                                    <input type="radio" name="no" id="" />
                                </label>
                            </div>
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
                                defaultValue={loadedCraft.photo}
                                name="photo"
                                className="input input-bordered w-full" required />
                        </label>
                    </div>
                    <input type="submit" value="Update Craft" className="btn btn-success w-full my-5" />
                </div>
            </form>
        </div>
    );
};

export default UpdateCraft;