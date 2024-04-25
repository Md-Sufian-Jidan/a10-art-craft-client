
const AddProduct = () => {
  const handleAddCraft= (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
  }
  return (
    <div className="bg-[#F4F3F0] lg:p-20 p-7">
      <h2 className="text-3xl text-center font-extrabold">Add a coffee</h2>
      <form onSubmit={handleAddCraft} className="md:w-1/2 mx-auto">
        {/* from name and quantity row */}
        <div className="md:flex gap-5 mb-5">
          <div className="from-control md:w-1/2">
            <label className="label">
              <span className="label-text">Coffee Category</span>
            </label>
            <label className="input-group">
              <input type="text" placeholder="Coffee Name"
                name="name" className="input input-bordered w-full" />
            </label>
          </div>
          <div className="from-control md:w-1/2">
            <label className="label">
              <span className="label-text">Available Details</span>
            </label>
            <label className="input-group">
              <input type="text" placeholder="Quantity"
                name="quantity"
                className="input input-bordered w-full" />
            </label>
          </div>
        </div>
        {/* from supplier row 2 */}
        <div className="md:flex gap-5 mb-5">
          <div className="from-control md:w-1/2">
            <label className="label">
              <span className="label-text">Supplier</span>
            </label>
            <label className="input-group">
              <input type="text" placeholder="Supplier"
                name="supplier" className="input input-bordered w-full" />
            </label>
          </div>
          <div className="from-control md:w-1/2">
            <label className="label">
              <span className="label-text">Taste</span>
            </label>
            <label className="input-group">
              <input type="text" placeholder="Taste"
                name="taste"
                className="input input-bordered w-full" />
            </label>
          </div>
        </div>
        {/* from catagory row 3 */}
        <div className="md:flex gap-5 mb-5">
          <div className="from-control md:w-1/2">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <label className="input-group">
              <input type="text" placeholder="Category"
                name="category" className="input input-bordered w-full" />
            </label>
          </div>
          <div className="from-control md:w-1/2">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <label className="input-group">
              <input type="text" placeholder="Details"
                name="details"
                className="input input-bordered w-full" />
            </label>
          </div>
        </div>
        {/* from photo url row 4 */}
        <div className="mb-5">
          <div className="from-control w-full">
            <label className="label">
              <span className="label-text">Photo Url</span>
            </label>
            <label className="input-group">
              <input type="text" placeholder="Photo Url"
                name="photo"
                className="input input-bordered w-full" />
            </label>
          </div>
          <input type="submit" value="Add Craft" className="btn btn-success w-full my-5" />
        </div>
      </form>
    </div>
  );
};

export default AddProduct;