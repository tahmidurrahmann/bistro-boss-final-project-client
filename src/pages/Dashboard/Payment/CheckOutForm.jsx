import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";

const CheckOutForm = () => {

    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type :"card",
            card,
        })

        if(error){
            console.log('error er karone matha bethaa', error);
            setError(error.message);
        }
        else{
            console.log('yo yo done PaymentMethod', paymentMethod);
            setError("");
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <div className="flex flex-col justify-center items-center my-6">
                    <button className="btn btn-primary btn-outline w-1/4" type="submit" disabled={!stripe}>
                        Pay
                    </button>
                    <p className="text-red-600">{error}</p>
                </div>
            </form>
        </div>
    );
};

export default CheckOutForm;