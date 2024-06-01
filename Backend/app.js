import express from "express";
import startServer from "./connection.js";
import user from "./routes/user/user_routes.js"

const app = express();
// Middleware
app.use(express.json());

// Simple route
app.get("/", (req, res) => {
    res.json({ success: true, message: "This is the home route" });
});

// all routes
app.use("/api/v1/user/", user)

// this will run the server as well as db
startServer(app);
