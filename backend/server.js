const express = require("express");
const cors = require("cors");
const { response } = require("express");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("dist"));

const users = {
  1: {
    id: 1,
    username: "user1",
    score: 10,
  },
  2: {
    id: 2,
    username: "user2",
    score: 20,
  },
  3: {
    id: 3,
    username: "user3",
    score: 30,
  },
  4: {
    id: 4,
    username: "user4",
    score: 40,
  },
  5: {
    id: 5,
    username: "user5",
    score: 50,
  },
};

app.get("/api/users", (request, response) => {
  response.json(JSON.stringify(assets));
});

const PORT = process.env.PORT || "3001";
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
