import express from "express";
import startServer from "./connection.js";
import user from "./routes/user/user_routes.routes.js";
import code from "./routes/code/code_contributing.routes.js"

const app = express();
// Middleware
app.use(express.json());

// Simple route
app.get("/", (req, res) => {
    res.json({ success: true, message: "This is the home route" });
});

// all routes
app.use("/api/v1/user/", user)

// here user can submit their code for review 
app.use("/api/v1/code/", code)

// this will run the server as well as db
startServer(app);
