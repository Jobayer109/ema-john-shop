import React, { useEffect, useState } from 'react';
import { addToDb, getStoredData } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import "./Shop.css";

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const addToCart = (product) => {
        setCart([...cart, product])
        addToDb(product.id)
    }
    
    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    
   
    return (
        <div className='divided'>
            <div className='grid grid-cols-3 gap-10'>
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        addToCart={addToCart}
                    ></Product>)
              }  
                
            </div>
            <div className='h-screen sticky  mt-6 text-center border border-gray-400 rounded-lg w-[90%] mx-auto bg-gray-200'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;