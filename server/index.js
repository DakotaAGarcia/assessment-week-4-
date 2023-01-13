const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment } = require('./controller')

app.get("/api/compliment", getCompliment);

const {getFortune} = require("./controller")

app.get("/api/fortune", getFortune)

const {addCompliment} = require("./controller")

app.post("/api/add", addCompliment);

const {addInspiration} = require("./controller")

app.post("/api/quote", addInspiration);

const {deleteQuote} = require("./controller")

app.delete("/api/delete", deleteQuote);

app.listen(4000, () => console.log("Server running on 4000"));
