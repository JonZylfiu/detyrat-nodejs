const express = require("express");

const APP_PORT = 3000;


const app = express();
app.use(json.parser());



app.listen(APP_PORT, ()=>{
    console.log(`Server started on port ${APP_PORT}`)
})