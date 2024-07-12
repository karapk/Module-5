import { db } from "@/server/db";

export default function handler(req, res) {
  if (req.method === "GET") {
    const menuItems = db.menu.get();
    // TODO #5 if the req.query has a search term (e.g req.query.search), use that search term to filter the menuItems (e.g menuItems.filter(<filter logic here>))
    res.status(200).json({ menu: menuItems });
  } else {
    res.status(404).json({ message: "We only support GET requests" });
  }
}

//code explained

/*




- In this code snippet, we are creating an API route that will be used to get the menu items. 
- The menu items are stored in the db object that we imported from the server/db.js file. The db object has a menu property that has a get method that returns the menu items.

- The handler function is an Express.js style request handler that takes two arguments, req and res. The req argument is an object that contains information about the HTTP request that was made, and the res argument is an object that contains methods for sending a response to the client.

- We check if the HTTP method of the request is GET (read) using the req.method property. If the method is GET, we call the db.menu.get() method to get the menu items and store them in the menuItems variable.

Remember that the db object is a fake database that we created to simulate a real database. In a real application, you would use a real database like MongoDB, PostgreSQL, or MySQL to store your data. We will be using PRISMA to interact with a real database in the next class. 
*/