import express from "express";
import userRoutes from "./src/routes/users.route.js";
import connect from "./src/services/db.service.js"; 
import { login, register } from "./src/controllers/auth.controller.js";

const APP_PORT = 3000;

const app = express();

app.use(express.json());

app.use("/users", userRoutes);

app.post("/login", login);
app.post("/register", register);



app.listen(APP_PORT, () => {
    console.log(`Server started on port ${APP_PORT}`)
    connect();
})
