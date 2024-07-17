import CardForm from "./CardForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51IeM0UBdeSROCMbCrX8u4MEEIAT97duj7c0JkFSNfahtI5yA5XwAwpWN4gxxxzT5B6VAHPPzrBSkJwXNGVcts51z002GL2pBjt"
);

const Cart = () => {
  return (
    <div>
      <div>
        <div
          className="col-md-6"
          style={{ position: "absolute", right: "25%", top: "10%" }}
        >
          <h3>Comfirm Your Payment</h3>
          <div>
            <Elements stripe={stripePromise}>
              <CardForm />
            </Elements>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
