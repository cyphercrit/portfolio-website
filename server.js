import express from "express";
import path from 'path';
import apiRoute from "./app/api/api.js";
import { fileURLToPath } from 'url';
import { dirname } from 'path'; 
import { exec } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename); // gets the directory name

const app = express();
const PORT = 8080;

app.use(express.json()); // parses JSON bodies
app.use("/api", apiRoute);

// Function to build the React app
const buildReactApp = () => {
    return new Promise((resolve, reject) => {
        exec('npm run build --prefix ./frontend', (error, stdout, stderr) => {
            if (error) {
                console.error(`Error building React app: ${error.message}`);
                reject(error);
                return;
            }
            if (stderr) {
                console.error(`Build stderr: ${stderr}`);
                reject(stderr);
                return;
            }
            console.log(`Build stdout: ${stdout}`);
            resolve(stdout);
        });
    });
};

// builds the react app when the server starts
buildReactApp()
    .then(() => {
        console.log('React app built successfully');

        // serves static files from react
        app.use(express.static(path.join(__dirname, "./frontend/build")));

        // handles any requests that dont use the api route
        app.get("*", (req, res) => {
            res.sendFile(path.join(__dirname, "./frontend/build", "index.html"));
        });

        app.listen(PORT, () => {
            console.log(`Website is running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.error('Failed to build the React app:', error);
        process.exit(1); // exits the process upon failure
    });
