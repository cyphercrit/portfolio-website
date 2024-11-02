import express from "express";
import path from 'path';
import apiRoute from "./app/api/api.js";
import { fileURLToPath } from 'url';
import { dirname } from 'path'; 

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename); // gets the directory name

const app = express();
const PORT = 8080;

app.use(express.json()); // parses json bodies
app.use("/api", apiRoute);

app.use(express.static(path.join(__dirname, "./frontend/build"))); // serves react build

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./frontend/build", "index.html")); // redirects non api routes to react
});

app.listen(PORT, () => {
    console.log(`Website is running on port ${PORT}`)
})
