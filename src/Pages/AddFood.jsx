
import useAuthContext from "../Context/AuthContext";


const AddFood = () => {
    const {user}=useAuthContext()
    const addedData=e=>{
        e.preventDefault()
        const formdata=new FormData(e.target)
        const addedInfo=Object.fromEntries(formdata.entries())
        console.log(addedInfo)
    }
    return (

        <div className="flex justify-center">

            <div className="card bg-base-100 w-full max-w-xl shrink-0 shadow-2xl">
                <h1 className="text-5xl font-bold text-center">Added Food</h1>
                <form onSubmit={addedData} className="card-body">
                    <div className="lg:flex gap-6">
                        <div className="form-control lg:w-1/2">
                            <label className="label">
                                <span className="label-text">Food Name </span>
                            </label>
                            <input type="text" name="foodName" placeholder="Food Name " className="input input-bordered" required />
                        </div>
                        <div className="form-control lg:w-1/2">
                            <label className="label">
                                <span className="label-text">Food Category </span>
                            </label>
                            <input type="text" name="foodCategory" placeholder="Food Category " className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="lg:flex gap-6">
                        <div className="form-control lg:w-1/2">
                            <label className="label">
                                <span className="label-text">Food Image</span>
                            </label>
                            <input type="url" name="foodPhoto" placeholder="Food Image (URL)" className="input input-bordered" required />
                        </div>
                        <div className="form-control lg:w-1/2">
                            <label className="label">
                                <span className="label-text">Food Origin (Country)</span>
                            </label>
                            <input type="text" name="foodOrigin" placeholder="Food Origin (Country)" className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="lg:flex gap-6">
                        <div className="form-control lg:w-1/2">
                            <label className="label">
                                <span className="label-text">Quantity</span>
                            </label>
                            <input type="text" name="foodQuantity" placeholder="Quantity" className="input input-bordered" required />
                        </div>
                        <div className="form-control lg:w-1/2">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" name="Price" placeholder="Price" className="input input-bordered" required />
                        </div>
                        </div>
                        <div className="lg:flex gap-6">
                    <div className="form-control lg:w-1/2">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" defaultValue={user?.email} readOnly name="email" placeholder="Email (owner)" className="input input-bordered" required />
                    </div>
                    <div className="form-control lg:w-1/2">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" defaultValue={user?.displayName} readOnly name="password" placeholder="Name (owner)" className="input input-bordered" required />

                    </div>
                    </div>
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">A short description of the food item ( ingredients, making procedure, etc. )</span>
                        </label>
                        <textarea cols='5' className="border p-2 rounded-lg" rows='5' name="description" placeholder="A short description of the food item ( ingredients, making procedure, etc. )"></textarea>

                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Add Item</button>
                    </div>

                </form>

            </div>

        </div>
    );
};

export default AddFood;