import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { StripeCardElement } from "@stripe/stripe-js";

const CardForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [paymentError, setPaymentError] = useState<string | null>(null);
  const [paymentSuccess, setPaymentSuccess] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement: StripeCardElement | null =
      elements.getElement(CardElement);

    if (!cardElement) {
      setPaymentError("Card element not found");
      return;
    }

    try {
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: cardElement,
      });

      if (error) {
        setPaymentError(error.message ?? "An unknown error occurred");
        setPaymentSuccess(null);
      } else if (paymentMethod) {
        setPaymentSuccess(paymentMethod.id);
        setPaymentError(null);
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      setPaymentError(
        error.message ?? "An error occurred while processing your payment"
      );
      setPaymentSuccess(null);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement />
        <button type="submit" disabled={!stripe}>
          Pay
        </button>
      </form>
      {paymentError && <p style={{ color: "red" }}>{paymentError}</p>}
      {paymentSuccess && (
        <p style={{ color: "green" }}>Payment was successfull</p>
      )}
    </div>
  );
};

export default CardForm;
