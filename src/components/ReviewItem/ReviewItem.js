import { TrashIcon } from '@heroicons/react/24/solid';
import React from "react";

const ReviewItem = ({ product, clearOrderList }) => {
  const { _id, img, name, price, shipping, quantity } = product;
  return (
    <div className='flex items-center justify-between border rounded-lg border-gray-300'>
      <div className="flex justify-center items-center">
        <img className="h-24 w-24 pl-1 rounded-lg" src={img} alt="" />
        <div className='p-1 font-medium'>
          <h4>{name}</h4>
          <p> Price: <span className='text-orange-500'>${price}</span></p>
          <small>Shipping: <span className='text-orange-500'>${shipping}</span></small> <br />
          <small> Quantity: <span className='text-red-500'>{quantity}</span></small> 
        </div>
          </div>
          <div>
          <TrashIcon onClick={()=>clearOrderList(_id)} className="h-10 w-10 mr-10 text-red-500 bg-red-200 hover:bg-red-100 rounded-full p-2"/>
          </div>
    </div>
  );
};

export default ReviewItem;
