import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
const Product = ({ product, addToCart }) => {
  const { name, img, price, ratings, seller} = product;
  return (
    <div>
      <div className="card card-compact w-[80%] mx-auto mt-6 bg-base-100 shadow-xl h-96">
        <figure>
          <img className="h-48 w-full" src={img ? img : 'No image found'} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-sm font-bold text-blue-700"> {name}</h2>
          <div className="mt-0 font-medium">
            <h4 className="font-bold">Price: ${price}</h4>
            <p>Seller: {seller}</p>
            <p>Rating: {ratings}</p>
          </div>
        </div>
        <div className="card-actions">
                  <button onClick={()=> addToCart(product)} className=" py-1 btn-primary w-full font-semibold ">Buy Now <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></button>
                  
        </div>
      </div>
    </div>
  );
};

export default Product;
