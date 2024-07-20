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
      body: JSON.stringify({ id: id, quantity: 1 }),
    });
  }

  if (menu.length === 0) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <h1>Welcome to Coffee Shop</h1>
      <h4>Here is our menu:</h4>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          padding: "10px",
        }}
      >
        {menu.map((item) => {
          return (
            <div
              key={item.id}
              style={{
                width: "300px",
                border: "1px solid black",
                borderRadius: "10px",
                margin: "10px",
                padding: "10px",
              }}
            >
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p>{item.price}</p>
              <button onClick={() => addToCart(item.id)}>Add to cart</button>
            </div>
          );
        })}
      </div>
    </>
  );
}

/* Explanation:

- The first line imports the useEffect and useState hooks from the React library.
- The useEffect hook is used to perform side effects in function components. UseEffect lets you perform actions outside the core rendering process of the function component.
- The useState hook is used to create state variables in function components. It allows management of data that can change within your function component and automatically re-renders the component when the state changes.
- The Home function component is defined, which will be the main component rendered on the home page.
- Inside the Home component, a state variable menu is created using the useState hook. The initial value of menu is an empty array. The empty array will be replaced with the menu data fetched from the API.

*/