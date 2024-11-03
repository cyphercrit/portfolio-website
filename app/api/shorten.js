import express from "express";
import axios from "axios";

const app = express.Router();

app.use(express.json()); // parses json bodies

// post endpoint to shorten urls
app.post("/", async (req, res) => {
    const { url } = req.body;
    try {
        const response = await axios.post("https://short.jurkovski.com/shorten", { url }, {
            headers: { "Content-Type": "application/json" }
        });
        res.json(response.data);
    } catch (error) {
        if (error.response && error.response.data && error.response.data.error) { // checks for more specific error
            res.status(400).json({ error: error.response.data.error })
        } else {
            res.status(500).json({ error: "Failed to shorten URL" }); // generic error
        }
    }
});

export default app;