// app.js

const express = require('express');
const app = express();
const port = 3001; // Change this to your desired port

app.use(express.json());

// Sample leaderboard data
const leaderboard = [
  { name: 'Player 1', score: 100 },
  { name: 'Player 2', score: 80 },
  // Add more data as needed
];

// Endpoint to retrieve the leaderboard
app.get('/leaderboard', (req, res) => {
  res.json(leaderboard);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
