const express = require("express");
const app = express();

app.get("/api", (req, res) => {
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

app.get("/api/users", (req, res) => {
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

app.listen(5000, () => {
  console.log("Le serveur écoute sur le port 5000");
});
