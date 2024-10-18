import express from "express";

const app = express.Router();

app.use(express.static("public")); // allows public access for css, assets, etc

app.get("/", (req, res) => {
    res.render("url-shortener.ejs");
});

export default app;