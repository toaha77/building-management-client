import UseAuth from "../../../Hooks/useAuth";

 
const PaymentFrom = ({apartmentData}) => {
  const {user} = UseAuth()
     return (
        <div>
            {
              apartmentData.map(item => (
                <div key={item._id}>
                   <div className="flex gap-2 mb-4">
          <div className="form-control mb-2 w-1/2">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              readOnly
              defaultValue={user?.email}
              placeholder="email"
              className="input input-bordered"
            />
          </div>

          <div className="form-control w-1/2">
            <label className="mb-3" htmlFor="pet-select">
              Choose a Month:
            </label>

            <select className="input input-bordered" name="pets">
              <option value="">--Please choose a Month--</option>
              <option value="November">November</option>
              <option value="December">December</option>
              <option value="January">January</option>
              <option value="February">February</option>
              <option value="March">March</option>
              <option value="April">April</option>
            </select>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="form-control mb-2 w-1/2">
            <label className="label">
              <span className="label-text">Floor</span>
            </label>
             <input
              type="text"
              name="floor"
              readOnly
              defaultValue={item.floor_no}
              placeholder="Type here"
              className="input input-bordered"
            />
          </div>
          <div className="form-control mb-2 w-1/2">
            <label className="label">
              <span className="label-text">Block</span>
            </label>
            <input
              type="text"
              name="block"
              readOnly
              defaultValue={item.block_name} 
              placeholder="Type here"
              className="input input-bordered"
            />
          </div>
        </div>
        <div className="flex gap-2">
          <div className="form-control mb-2 w-1/2">
            <label className="label">
              <span className="label-text">Apartment No</span>
            </label>
            <input
              type="text"
              name="apartment"
              readOnly
              defaultValue={item.apartment_no}
              placeholder="Type here"
              className="input input-bordered"
            />
          </div>
          <div className="form-control mb-2 w-1/2">
            <label className="label">
              <span className="label-text">Rent</span>
            </label>
            <input
              type="text"
              name="Rent"
              readOnly
              defaultValue={item.rent}
              placeholder="Type here"
              className="input input-bordered"
            />
          </div>
        </div>
                </div>
              ))
            }
        </div>
    );
};

export default PaymentFrom;