import { useEffect, useState } from "react";
import "./Shop.css";
import Product from "../Product/Product";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  const handleAddCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="shop-container">
      <div className="products-container">
        <h3>Products Container</h3>

        <div className="product-container">
          {products.map((product) => (
            <Product
              key={product.id}
              product={product}
              handleAddCart={handleAddCart}
            ></Product>
          ))}
        </div>
      </div>
      <div className="cart-container">
        <h3>Order Summary</h3>
        <p>{cart.length} Product Added</p>
      </div>
      <p>{products.length}</p>
    </div>
  );
};

export default Shop;
