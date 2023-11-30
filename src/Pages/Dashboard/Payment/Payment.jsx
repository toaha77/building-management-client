import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOut from "./CheckOut";
  
 const stripePromise = loadStripe('pk_test_51OEwPLEKHE0LhNDOTGJwgj601wPcefM9gzfSG5kRfmKmKugagpEkLnXgDj4cmFKoYfzTCjaj33d6UeQlxA3aBMcs007MWYC4tY')
 
const Payment = () => {
 
     return (
        <div>
            <div>
                <h2 className="text-3xl text-center mb-6">Make <span className="text-green-500 ">Payment</span></h2>
            </div>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckOut></CheckOut>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;