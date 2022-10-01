const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment } = require('./controller')
const { getFortune } = require('./controller')
const { createCompliment } = require('./controller')
const { getUserFortune } = require('./controller')

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.post("/api/create_compliment", createCompliment);
app.get("/api/user_fortune", getUserFortune);

app.listen(4000, () => console.log("Server running on 4000"));
