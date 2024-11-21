import express from "express";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";

const app = express();

// CORS middleware untuk mengizinkan permintaan dari frontend
app.use(cors({
    origin: 'http://localhost:3000', // Hanya izinkan domain ini
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type,Authorization'
}));

// Gunakan UserRoute dengan prefiks '/api' untuk semua route dalam router ini
app.use('/api', UserRoute);  // '/api' adalah path dasar untuk router UserRoute

app.use(express.json()); // Middleware untuk parsing JSON

app.listen(5000, () => console.log("Server berjalan di port 5000"));
