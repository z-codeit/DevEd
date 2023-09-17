const express = require("express");
const cors = require("cors");
const { response } = require("express");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("dist"));

const users = [
  { name: "John", score: 50 },
  { name: "Don", score: 34 },
  { name: "Mike", score: 75 },
  { name: "Jane", score: 20 },
  { name: "Sally", score: 60 },
  { name: "Jill", score: 100 },
  { name: "Jack", score: 10 },
  { name: "Jen", score: 30 },
  { name: "Jenny", score: 80 },
];

app.get("/api/users", (request, response) => {
  response.json(users);
});

const PORT = process.env.PORT || "3001";
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
