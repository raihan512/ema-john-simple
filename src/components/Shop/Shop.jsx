import { useEffect, useState } from "react";
import "./Shop.css";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import { addToDb, getShoppingCart } from "../../Database/DataBase";

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

  useEffect(() => {
    let addedToCart = getShoppingCart();
    const savedCart = [];

    for (let id in addedToCart) {
      const addedProduct = products.find((product) => product.id === id);
      if (addedProduct) {
        const quantity = addedToCart[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
      }
    }
    setCart(savedCart);
  }, [products]);

  const handleAddCart = (product) => {
    let newCart = [];
    const exist = cart.find((cartItem) => cartItem.id === product.id);
    if (!exist) {
      product.quantity = 1;
      newCart = [...cart, product];
    } else {
      const reaminingProduct = cart.filter(
        (cartItem) => cartItem.id !== product.id
      );
      product.quantity = product.quantity + 1;
      newCart = [...reaminingProduct, product];
    }
    setCart(newCart);
    addToDb(product.id);
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
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
