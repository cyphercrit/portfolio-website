import express from "express";
import shortenRoute from './shorten.js';

const app = express.Router();

app.use("/shorten", shortenRoute);

export default app