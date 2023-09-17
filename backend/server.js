const express = require("express");
const cors = require("cors");
const { response } = require("express");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("dist"));

const users = [{ name: "Ed Sheeeran", score: 9 }];

app.post("/api/users", (request, response) => {
  const body = request.body;
  let user = {
    name: body.name,
    score: body.score,
  };
  users.push(user);
  console.log(user);
  response.json(user);
});

app.get("/api/users", (request, response) => {
  response.json(users);
});

const PORT = process.env.PORT || "3001";
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
