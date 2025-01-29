const express = require('express');
const bodyParser = require('body-parser');
// const userRoutes = require('./routes/user.router');
require('dotenv').config();

const app = express();
const PORT = 3001;

// Middleware
app.use(bodyParser.json());
app.use('/api', (req, res) => {
  res.send('Hello, Tensor API'); // Respond with "Hello, World!"
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
