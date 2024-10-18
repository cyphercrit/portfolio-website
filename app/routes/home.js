import express from "express";

const app = express.Router();

app.get("/", (req, res) => {
    res.render("home.ejs");
});

export default app;