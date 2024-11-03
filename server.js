import express from "express";
import path from 'path';
import apiRoute from "./app/api/api.js";
import { fileURLToPath } from 'url';
import { dirname } from 'path'; 
import { spawn } from 'child_process';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename); // gets the directory name

const app = express();
const PORT = 8080;

app.use(express.json()); // parses JSON bodies
app.use("/api", apiRoute);

// function to build the React app
const buildReactApp = () => {
    return new Promise((resolve, reject) => {
        const install = spawn('npm', ['install', '--prefix', './frontend']);
        install.on('close', (code) => {
            if (code !== 0) {
                reject(new Error(`npm install failed with code ${code}`));
                return;
            }
            const build = spawn('npm', ['run', 'build', '--prefix', './frontend']);
            build.stdout.on('data', (data) => {
                console.log(`Build stdout: ${data}`);
            });
            build.stderr.on('data', (data) => {
                console.error(`Build stderr: ${data}`);
            });
            build.on('close', (code) => {
                if (code !== 0) {
                    reject(new Error(`npm run build failed with code ${code}`));
                    return;
                }
                resolve();
            });
        });
    });
};

// builds the react app when the server starts
buildReactApp()
    .then(() => {
        console.log('React app built successfully');

        // serves static files from react
        app.use(express.static(path.join(__dirname, "./frontend/dist")));

        // handles any requests that dont use the api route
        app.get("*", (req, res) => {
            res.sendFile(path.join(__dirname, "./frontend/dist", "index.html"));
        });

        app.listen(PORT, () => {
            console.log(`Website is running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.error('Failed to build the React app:', error);
        process.exit(1); // exits the process upon failure
    });
