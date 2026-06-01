import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

const PORT = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("pages/home");
});

app.get("/login", (req, res) => {
    res.render("pages/login", { message: "" });
});

app.post("/login", (req, res) => {
    const { login, password } = req.body;

    const message = login === "bill" && password === "12345"
        ? `Hello ${login}`
        : "Invalid login or password";

    res.render("pages/login", { message });
});

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
