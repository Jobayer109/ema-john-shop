import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { addToDb, deleteShoppingCart, getStoredData } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10);

  const pages = Math.ceil(count / size);

  useEffect(() => {
    const url = `http://localhost:5000/products?page=${page}&size=${size}`;
    fetch(url)
      .then(url)
      .then((res) => res.json())
      .then((data) => {
        setCount(data.count);
        setProducts(data.products);
      });
  }, [page, size]);

  const addToCart = (selectedProduct) => {
    let newCart = [];
    const exists = cart.find((product) => product._id === selectedProduct._id);
    if (!exists) {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    } else {
      const rest = cart.filter((product) => product._id !== selectedProduct._id);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    }

    setCart(newCart);
    addToDb(selectedProduct._id);
  };

  const clearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };

  useEffect(() => {
    const storedCart = getStoredData();
    const savedProducts = [];

    const ids = Object.keys(storedCart);

    fetch("http://localhost:5000/productsByIds", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(ids),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        for (const id in storedCart) {
          const addedProducts = data.find((product) => product._id === id);
          if (addedProducts) {
            const quantity = storedCart[id];
            addedProducts.quantity = quantity;
            savedProducts.push(addedProducts);
          }
        }
        setCart(savedProducts);
      });
  }, [products]);

  return (
    <div className="divided">
      <div className="grid grid-cols-3 gap-10">
        {products.map((product) => (
          <Product key={product._id} product={product} addToCart={addToCart}></Product>
        ))}
      </div>
      <div className="h-screen sticky  mt-6 pt-12 text-center border border-gray-400 rounded-lg w-72 mx-auto bg-orange-500">
        <Cart clearCart={clearCart} cart={cart}></Cart>
        <button className="btn btn-sm w-[90%] bg-success hover:bg-green-700">
          <Link to="/orders">Review Order</Link>{" "}
        </button>
      </div>
      <div className="w-[80%] ml-80 my-12">
        <p className="font-semibold font-mono my-2">
          Current page: <span className="text-orange-600 text-2xl"> {page}</span> and{" "}
          <span className="text-orange-600 text-2xl"> {size}</span>
        </p>

        {[...Array(pages).keys()].map((number) => (
          <button key={number} onClick={() => setPage(number)}>
            {page === number ? (
              <p className="btn btn-xs btn-primary mr-2">{number + 1}</p>
            ) : (
              <p className="btn btn-xs btn-outline   mr-2">{number + 1}</p>
            )}
          </button>
        ))}
        <select
          defaultValue={10}
          onChange={(event) => setSize(event.target.value)}
          className="btn btn-xs btn-warning"
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
      </div>
    </div>
  );
};

export default Shop;
