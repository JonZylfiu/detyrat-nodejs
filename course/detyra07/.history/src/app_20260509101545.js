const express = require("express");
const router = require("./routes/users.route");

const APP_PORT = 3000;


const app = express();

app.use(express.json());






app.listen(APP_PORT, ()=>{
    console.log(`Server started on port ${APP_PORT}`)
})