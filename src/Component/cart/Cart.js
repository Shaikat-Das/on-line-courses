import React from 'react';
import './cart.css'
const cart = (props) => {
const cart=props.cart;
const totalPrice= cart.reduce((total, course) => total + course.price, 0)

let shippingCost= 0.00;
 if(totalPrice>900){
    shippingCost= 3.50
}

else if(totalPrice>500){
    shippingCost= 5.50
}
else if (totalPrice>0){
    shippingCost= 7.00
}
    return (
        <div className="cart">
            <h4>Order Summary</h4>
            <p>Items Ordered:{cart.length} </p>
            <p>Shipping Cost: $ {shippingCost}</p>
            <p><b>Total Price: ${totalPrice+shippingCost} </b></p>
        </div>
    );
};

export default cart;