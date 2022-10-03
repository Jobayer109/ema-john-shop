import React from "react";

const Cart = ({ cart }) => {
  console.log(cart);
  let total = 0;
  let shipping = 0;
  for (const product of cart) {
    total = total + product.price;
    shipping = shipping + product.shipping;
  }
  const tax = parseFloat((total * 0.01).toFixed(2));

  return (
    <div>
      <h3 className="font-bold text-blue-700">Order Summery</h3>
      <h4>Selected items: {cart.length}</h4>
      <div className="bg-white mx-4 rounded-lg mt-2 font-medium pl-8 text-start">
        <p>Total Price: ${total} </p>
        <p>Shipping: ${shipping} </p>
        <p>Tax: ${tax}</p>

        <p>Grand Total: {total + shipping + tax}</p>
      </div>
    </div>
  );
};

export default Cart;
