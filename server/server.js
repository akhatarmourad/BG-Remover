import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './configs/mongodb.js';
import userRouter from './routes/UserRoutes.js';


// App Configuration
const PORT = process.env.PORT || 7500;
const app = express();
await connectDB();


// Initialize Middlewares
app.use(express.json());
app.use(cors());

// API Routes
app.get('/', (req, res) => res.send("API Route, Home Endpoint !"));
app.use('/api/user', userRouter);

// Server Listening
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});