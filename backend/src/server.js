import express from 'express';
import notesRoute from "./routes/notesRoute.js";
import {connectDB} from "./config/db.js";
import rateLimiter from './middleware/ratelimit.js';
import dotenv from 'dotenv';
import cors from 'cors';
import path from "path";

dotenv.config();

const PORT = process.env.PORT || 5001;
const app = express();
const __dirname = path.resolve()
app.use(express.json());
app.use(rateLimiter);

if(process.env.NODE_ENV !== "production")
{
    app.use(cors(
        {origin : "http://localhost:5173"}
    ));
}
    
app.use("/api/notes", notesRoute);



if(process.env.NODE_ENV !== "production")
{
    app.use(express.static(path.join(__dirname, "../frontend", "dist")))
    app.get("/:anyParam", (req, res) => {
        res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"))
    })
}

connectDB();

app.listen(PORT, () => {
    console.log(`Server is listening at port http://localhost:5001`);
});