import express from "express";

import homeRoute from "./app/routes/home.js"
import projectsRoute from "./app/routes/projects.js"

const app = express();
const PORT = 3000;

app.use(express.static("public")); // allows public access for css, assets, etc

app.set('view engine', 'ejs'); // sets view engine
app.set('views', './app/views'); // sets views folder for express

app.use(homeRoute);
app.use("/projects", projectsRoute);

app.listen(PORT, () => {
    console.log(`Website is running on port ${PORT}`)
})
