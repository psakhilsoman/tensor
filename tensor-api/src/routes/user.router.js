const express = require('express');
const { getUsers, addUser } = require('../db/dbService');

const router = express.Router();

// Route to get all users
router.get('/users', async (req, res) => {
  try {
    const users = await getUsers();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch users' });
  }
});

// Route to add a user
router.post('/users', async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const rowsAdded = await addUser({ name, email, password });
    res.json({ success: rowsAdded > 0 });
  } catch (err) {
    res.status(500).json({ error: 'Failed to add user' });
  }
});

module.exports = router;
