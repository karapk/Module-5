// pages/cart.js
import React, { useEffect, useState } from 'react';

function Cart() {
  const [cartData, setCartData] = useState([]);
  const [menuData, setMenuData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      // Fetch cart data
      const cartRes = await fetch("http://localhost:3000/api/cart");
      const cartData = await cartRes.json();

      // Fetch menu data
      const menuRes = await fetch("http://localhost:3000/api/menu");
      const menuData = await menuRes.json();

      setCartData(cartData.cart);
      setMenuData(menuData.menu);
      setLoading(false);
    }

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;

  // Map the cart items to menu items to display the details
  const cartItems = cartData.map(cartItem => {
    const menuItem = menuData.find(item => item.id === cartItem.id);
    return {
      ...menuItem,
      quantity: cartItem.quantity
    };
  });

  return (
    <div>
      <h1>Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              <h2>{item.name}</h2>
              <p>Quantity: {item.quantity}</p>
              <p>Price: ${item.price * item.quantity}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;
