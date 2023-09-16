const express = require("express");
const cors = require("cors");
const { response } = require("express");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("dist"));

const PORT = process.env.PORT || "3001";
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
