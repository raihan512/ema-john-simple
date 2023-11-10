import "./Product.css";

const Product = ({ product, handleAddCart }) => {
  const { img, name, price, ratings, seller, shipping } = product;
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-details">
        <h4>{name}</h4>
        <h5>Price: {price}</h5>
        <p>Manufacturer: {seller} </p>
        <p>Shipping Charge: {shipping} </p>
        <p>Rating: {ratings} </p>
      </div>
      <button onClick={() => handleAddCart(product)}>Add To Cart</button>
    </div>
  );
};

export default Product;
