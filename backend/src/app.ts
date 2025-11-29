import express from "express";
import authRoutes from "./routes/auth.routes.ts";
import cors from "cors";

import coursesRouter from './routes/courses.ts';

const app = express();

app.use(cors());

// Middleware to read JSON bodies
app.use(express.json());

app.use("/api/auth", authRoutes);

app.use('/api/courses', coursesRouter);

// Test route
app.get("/", (req, res) => {
    res.send("Backend is running!");
});


export default app;