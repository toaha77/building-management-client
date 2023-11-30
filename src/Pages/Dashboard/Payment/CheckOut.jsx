import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";

import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";
import UseAuth from "../../../Hooks/useAuth";
import UseCart from "../../../Hooks/UseCart";
 import PaymentFrom from "./PaymentForm";

const CheckoutForm = () => {
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
   const [transactionId, setTransactionId] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = UseAxiosSecure();
  const { user } = UseAuth();
  const [apartmentData, setApartmentData] = useState([]);
  const [cart, refetch] = UseCart();
  const navigate = useNavigate();
 

  useEffect(()=> {
      axiosSecure.get(`/carts?email=${user.email}`)
      .then(res=> {
        setApartmentData(res.data);
        console.log(res.data);
      })
  }, [axiosSecure, user?.email])

  const totalPrice = cart.reduce((total, item) => total + item.rent, 0);
  console.log(totalPrice);
  useEffect(() => {
    if (totalPrice > 0) {
      axiosSecure
        .post("/create-payment-intent", { price: totalPrice })
        .then((res) => {
           setClientSecret(res.data.clientSecret);
        });
    }
  }, [axiosSecure, totalPrice]);

 

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const pets = form.pets.value;
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("payment error", error);
      setError(error.message);
    } else {
      console.log("payment method", paymentMethod);
      setError("");
    }

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });

    if (confirmError) {
      console.log("confirm error");
      setError(error);
    } else {
      if (paymentIntent.status === "succeeded") {
        setTransactionId(paymentIntent.id);

        const payment = {
          pets,
          email: user.email,
          price: totalPrice,
          transactionId: paymentIntent.id,
          date: new Date(),
          cartIds: cart.map((item) => item._id),

          status: "pending",
        };

        const res = await axiosSecure.post("/payments", payment);
        refetch();
        if (res.data?.paymentResult?.insertedId) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Thank you",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/dashboard/paymentHistory");
        }
      }
    }
  };

  return (
    <div className="container mx-auto">
      <form onSubmit={handleSubmit}>
        
        <PaymentFrom apartmentData={apartmentData}></PaymentFrom>

        <CardElement
          className=""
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-sm bg-green-500 hover:bg-green-500 my-4"
          type="submit"
          // disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
        <p className="text-red-600">{error}</p>
        {transactionId && (
          <p className="text-green-600">
            {" "}
            Your transaction id: {transactionId}
          </p>
        )}
      </form>
    </div>
  );
};

export default CheckoutForm;
