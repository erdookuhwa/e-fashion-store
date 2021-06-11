import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ({ price }) => {
    // stripe takes dollar payments in cents so convert to cents
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IeO40HnrbjvJ43QPijoJwlyuRGX7mQPoROL8LO6gn8wLaMfl0DGTaXrvKkvV9wBI69Ba0rSNMys96VjAKIlJRva0020F5T1QC'


    const onToken = token => {
        // console.log(token)
        alert(`Payment successful!`);
    }

    return (
        <StripeCheckout 
            label='Make Payment'
            name='NUE Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;