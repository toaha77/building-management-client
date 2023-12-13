import Swal from "sweetalert2";
import UseAuth from "../../hooks/useAuth";
import {  useLocation, useNavigate } from "react-router-dom";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";
import UseCart from "../../Hooks/UseCart";
 

const SingleApartment = ({ apartment }) => {
  const { _id, apartment_no, block_name, floor_no, rent, image } = apartment;
  const [, refetch] = UseCart()
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = UseAxiosSecure();
  const { user } = UseAuth();

  const handleCereateAgrement = (building) => {
    if (user && user.email) {
      //send cart item to the database
      const cartItem = {
        _id,
        email: user.email,
        apartment_no,
        floor_no,
        block_name,
        rent,
        image,
      };
      axiosSecure.post("/carts", cartItem).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: `${apartment_no} added to your cart`,
            showConfirmButton: false,
            timer: 1500,
          });
           
          refetch();
        }
      });
    } else {
      Swal.fire({
        title: "You are not Logged In",
        text: "Please login to add to the cart?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login!",
      }).then((result) => {
        if (result.isConfirmed) {
          //   send the user to the login page
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <div className="mt-4">
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img src={image} className="h-60 w-80" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Apartment No : {apartment_no}</h2>
          <p>Block : {block_name}</p>
          <div className="card-actions justify-between">
            <h3>Floor No : {floor_no}</h3>
            <h3>Rent :$ {rent}</h3>
          </div>
          <div className="mx-auto">
            <button
              onClick={() => handleCereateAgrement(apartment)}
              className="btn bg-green-500 hover:bg-green-500"
            >
              Agreement
            </button>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default SingleApartment;
