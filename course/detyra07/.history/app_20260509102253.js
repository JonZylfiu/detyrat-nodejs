const express = require("express");
const userRoutes = require("./src/routes/users.route");

const APP_PORT = 3000;


const app = express();

app.use(express.json());

app.use("/users", userRoutes);




app.listen(APP_PORT, ()=>{
    console.log(`Server started on port ${APP_PORT}`)
})