const express = require('express');
const app = express();

app.use(express.json());

// In-memory users database
let users = [
  { id: 1, name: "Sadia", email: "sadia@gmail.com" }
];

// GET all users
app.get('/users', (req, res) => {
  res.json(users);
});

// GET user by ID
app.get('/users/:id', (req, res) => {
  const user = users.find(u => u.id == req.params.id);
  if (!user) return res.status(404).json({ error: "User not found" });
  res.json(user);
});

// POST create user
app.post('/users', (req, res) => {
  const { name, email } = req.body;
  if (!name || !email)
    return res.status(400).json({ error: "Name and email are required" });

  const newUser = {
    id: users.length + 1,
    name,
    email
  };
  users.push(newUser);
  res.status(201).json(newUser);
});

// PUT update user
app.put('/users/:id', (req, res) => {
  const user = users.find(u => u.id == req.params.id);
  if (!user) return res.status(404).json({ error: "User not found" });

  const { name, email } = req.body;
  if (!name || !email)
    return res.status(400).json({ error: "Name and email are required" });

  user.name = name;
  user.email = email;
  res.json(user);
});

// DELETE user
app.delete('/users/:id', (req, res) => {
  const userIndex = users.findIndex(u => u.id == req.params.id);
  if (userIndex === -1) return res.status(404).json({ error: "User not found" });

  users.splice(userIndex, 1);
  res.json({ message: "User deleted successfully" });
});

// Server running
app.listen(3000, () => console.log("Server running on port 3000"));