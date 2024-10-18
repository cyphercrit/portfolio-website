import express from "express";

import gdRoute from "./graphing-derivatives.js";

const app = express.Router();

app.use(express.static("public")); // allows public access for css, assets, etc

app.use("/graphing-derivatives", gdRoute);

export default app;