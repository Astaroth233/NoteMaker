import express from 'express';
import notesRoute from "./routes/notesRoute.js";
import {connectDB} from "./config/db.js";
import rateLimiter from './middleware/ratelimit.js';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const PORT = 5001;
const app = express();
app.use(express.json());
app.use(rateLimiter);
app.use(cors(
    {origin : "http://localhost:5173"}
));
app.use("/api/notes", notesRoute);

connectDB();

app.listen(PORT, () => {
    console.log(`Server is listening at port http://localhost:5001`);
});