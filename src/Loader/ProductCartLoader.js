import { getStoredData } from "../utilities/fakedb";

export const ProductCartLoader = async () => {
  const productsData = await fetch("http://localhost:5000/products");
  const { count, products } = await productsData.json();

  const storedCart = getStoredData();
  const initialCart = [];
  for (const id in storedCart) {
    const addedProducts = products.find((product) => product._id === id);
    if (addedProducts) {
      const quantity = storedCart[id];
      addedProducts.quantity = quantity;
      initialCart.push(addedProducts);
    }
  }

  return { count, products, initialCart };
};
