import React from "react";
import { Link } from "react-router-dom";


const Cart = ({ cart, clearCart }) => {
  let quantity = 0;
  let total = 0;
  let shipping = 0;
  for (const product of cart) {
    quantity = quantity + product.quantity;
    total = total + product.price * product.quantity;
    shipping = shipping + product.shipping;
  }
  const tax = parseFloat((total * 0.01).toFixed(2));

  return (
    <div>
      <h3 className="font-bold text-white my-4 text-xl">Order Summery</h3>
      <h4 className="font-bold">
        Selected items:{" "}
        <span className="bg-black text-yellow-400 rounded-full p-1">{quantity}</span>
      </h4>
      <div className="bg-black text-white py-6 px-4 mx-4 rounded-lg mt-2 font-medium pl-8 text-start">
        <p>
          Total Price: <span className="text-cyan-300 text-lg">$ {total}</span>{" "}
        </p>
        <p>
          Shipping: <span className="text-cyan-300 text-lg">$ {shipping}</span>{" "}
        </p>
        <p>
          Tax: <span className="text-cyan-300 text-lg">${tax}</span>
        </p>

        <p>
          Grand Total: <span className="text-red-500 text-lg">$ {total + shipping + tax}</span>
        </p>
      </div>
      <div className="mt-8">
        {/* <button className="btn btn-sm w-[90%] bg-success hover:bg-green-700"><Link to="/orders">Review Order</Link> </button> */}
        {/* {children} */}
      </div>
        {/* <button onClick={clearCart} className="btn btn-sm w-[90%]  mt-2 btn-warning border border-cyan-50 hover:bg-red-500">Clear Cart</button>  */}
    </div>
  );
};

export default Cart;
