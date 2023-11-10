const addToDb = (id) => {
  const shoppingCart = getShoppingCart();
  const quantity = shoppingCart[id];
  if (quantity) {
    shoppingCart[id] = quantity + 1;
  } else {
    shoppingCart[id] = 1;
  }

  localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
};

const getShoppingCart = () => {
  let shoppingCart;
  const stroedCart = localStorage.getItem("shopping-cart");
  if (stroedCart) {
    shoppingCart = JSON.parse(stroedCart);
  } else {
    shoppingCart = {};
  }
  return shoppingCart;
};

export { addToDb, getShoppingCart };
