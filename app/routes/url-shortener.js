import express from "express";
import axios from "axios";

const app = express.Router();

app.use(express.static("public")); // allows public access for css, assets, etc
app.use(express.json()); // parses json bodies

app.get("/", (req, res) => {
    res.render("url-shortener.ejs");
});

// post endpoint to shorten urls
app.post("/shorten", async (req, res) => {
    const { url } = req.body;
    try {
        const response = await axios.post("https://short.jurkovski.com/shorten", { url }, {
            headers: { "Content-Type": "application/json" }
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: "Failed to shorten URL" });
    }
});

export default app;