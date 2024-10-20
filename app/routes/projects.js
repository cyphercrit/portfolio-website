import express from "express";

import gdRoute from "./graphing-derivatives.js";
import uSRoute from "./url-shortener.js";

const app = express.Router();

app.use(express.static("public")); // allows public access for css, assets, etc

app.use("/graphing-derivatives", gdRoute);
app.use("/url-shortener", uSRoute);

export default app;