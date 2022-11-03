import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { deleteShoppingCart, removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";

const Orders = () => {
    const {initialCart } = useLoaderData() //products: products, initialCart: initialCart

  const [cart, setCart] = useState(initialCart);

  const clearOrderList = (id) => {
    const remainCart = cart.filter(product => product._id !== id);
    setCart(remainCart)
    removeFromDb(id)
  }
  const clearCart = () => {
    setCart([]);
    deleteShoppingCart()
  }
  
  
  return (
    <div className='divided  w-[75%] mx-auto my-24'>
    <div className='grid grid-cols-1 gap-3'>
               {
          cart.map(product => <ReviewItem
            key={product._id}
            product={product}
            clearOrderList={clearOrderList}
          ></ReviewItem>)
        }

{
    cart.length === 0 && <h2 className="font-bold flex justify-center items-center"> Ops ! No items for review.  <Link className="text-blue-500 underline" to='/'> Continue Shopping</Link> </h2>
  }
    </div>
    <div className=' sticky  my-screen text-center border border-gray-400 rounded-lg w-80 h-96 ml-12 mx-auto bg-orange-500'>
        <Cart
          clearCart={clearCart}
          cart={cart}>
        </Cart>
        <button className="btn btn-sm w-[90%] bg-success hover:bg-green-700 mt-3"><Link to="/shipping">Shipping proceed</Link> </button>
    </div>
</div>
  );
};

export default Orders;
