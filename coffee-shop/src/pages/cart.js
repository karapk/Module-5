import React, { useEffect, useState} from 'react'

function cart() {
   const [cartData, setCartData] = useState({ cart: [] });
   const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchCart() {
            const res = await fetch('/api/cart');
            const data = await res.json();
            setCartData(data);
            setLoading(false);
        }
        fetchCart();
    }, []);

    if (loading) return <p>Loading...</p>;
    
    return (
        <div>
            <h1>Cart</h1>
            {cartData.cart.length === 0 && <p>Your cart is empty</p>}
            <ul>
                {cartData.cart.map((item) => {
                    return (
                        <li key={item.id}>
                            <h2>{item.name}</h2>
                            {/* <p>${item.price}</p> */}
                        </li>
                    );
                })}
            </ul>
        </div>
    );   
}

export default cart;
