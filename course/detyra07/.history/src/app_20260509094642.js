const express = require("express");
const APP_PORT = 3000;
const app = express();




app.listen(APP_PORT, ()=>{
    console.log(`Server started on port ${APP_PORT}`)
})