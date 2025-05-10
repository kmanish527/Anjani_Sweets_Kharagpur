import express from "express";
import cors from "cors";
import 'dotenv/config';
import cookieParser from "cookie-parser";
import connentDB from './config/mongodb.js';
import authRouter from './routes/authRoutes.js';
import userRouter from './routes/userRoutes.js'; 

const app = express();
const port = process.env.PORT || 4000;
connentDB();

app.use(express.json());
app.use(cookieParser());
app.use(cors({ credentials: true }));

// Routes
app.get('/', (req, res) => res.send("API working"));
app.use('/api/auth', authRouter);
app.use('/api/user', userRouter); 

app.listen(port, () => console.log(`Server started on port ${port}`));
