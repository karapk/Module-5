import { useEffect, useState } from "react";

export default function Home() {

const [menu, setMenu] = useState([]);

useEffect(() => {
  async function loadData() {
    const res = await fetch("/api/menu");
    const data = await res.json();
    setMenu(data.menu);
  }
  loadData();
}, []);

function addToCart(id) {
  fetch(`/api/cart`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id: id, quantify: 1 }),
  });
}

  return (
    <>
      <h1>Welcome to Coffee Shop</h1>
      <h4>Hers is our menu</h4>
      <div style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        padding: "10px",
      }}>
      {menu.map((item) => {
        return (
          <div key={item.id} style={{
            width: "300px",
            border: "1px solid black",
            borderRadius: "10px",
            margin: "10px",
            padding: "10px",
          }}>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p>${item.price}</p>
            <button onClick={() => addToCart(item.id)}>Add to cart</button>
          </div>
        );
      })}
      </div>
      
    </>
  );
}