const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, 
        getFortune, 
        createFortune, 
        getUserFortune, 
        deleteLastFortune, 
        changeLastFortune } = require('./controller')

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.post("/api/create_fortune", createFortune);
app.get("/api/user_fortune", getUserFortune);
app.delete("/api/delete_user_fortune", deleteLastFortune);
app.put("/api/change_user_fortune", changeLastFortune);

app.listen(4000, () => console.log("Server running on 4000"));
