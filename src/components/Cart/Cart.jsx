import "./Cart.css";

const Cart = ({ cart }) => {
  let totalPrice = 0;
  let totalShipping = 0;
  let totalItem = 0;
  for (let cartItem of cart) {
    totalPrice = totalPrice + cartItem.price * cartItem.quantity;
    totalShipping += cartItem.shipping;
    totalItem = totalItem + cartItem.quantity;
  }
  const tax = (totalPrice * 7) / 100;
  const grandTotal = totalPrice + totalShipping + tax;

  return (
    <div className="cart">
      <h3>Order Summary</h3>
      <p>Selected Items: {totalItem}</p>
      <p>Total Price: {totalPrice} </p>
      <p>Total Shipping Charge: {totalShipping} </p>
      <p>Tax: {tax} </p>

      <h4>Grand Total: {grandTotal}</h4>

      <div className="cart-btns">
        <button>Clear Cart</button>
        <button>Review Order</button>
      </div>
    </div>
  );
};

export default Cart;
