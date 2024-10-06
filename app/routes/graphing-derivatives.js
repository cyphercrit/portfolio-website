import express from "express";

const app = express.Router();

app.get("/", (req, res) => {
    res.render("graphing-derivatives.ejs");
});

export default app;