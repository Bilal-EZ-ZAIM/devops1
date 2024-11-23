const express = require("express");
const app = express();

app.get("/newapi/", (req, res) => {
  res.send(
    "Bienvenue sur notre API ! Veuillez accéder aux différentes routes pour obtenir des informations."
  );
});

app.get("/newapi/users", (req, res) => {
  const users = [
    { id: 1, name: "Alice", email: "alice@example.com" },
    { id: 2, name: "Bob", email: "bob@example.com" },
    { id: 3, name: "Charlie", email: "charlie@example.com" },
    { id: 4, name: "David", email: "david@example.com" },
    { id: 5, name: "Eve", email: "eve@example.com" },
  ];

  // Renvoyer la liste des utilisateurs en réponse
  res.status(200).json(users);
});

app.get("/newapi/products", (req, res) => {
  const products = [
    {
      id: 1,
      name: "Product 1",
      price: 20.99,
      description: "Description of product 1",
    },
    {
      id: 2,
      name: "Product 2",
      price: 50.0,
      description: "Description of product 2",
    },
    {
      id: 3,
      name: "Product 3",
      price: 15.75,
      description: "Description of product 3",
    },
    {
      id: 4,
      name: "Product 4",
      price: 30.5,
      description: "Description of product 4",
    },
    {
      id: 5,
      name: "Product 5",
      price: 45.0,
      description: "Description of product 5",
    },
  ];

  res.status(200).json(products);
});

app.listen(5000, () => {
  console.log("Le serveur écoute sur le port 5000");
});
