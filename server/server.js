import express from 'express';
import cors from 'cors';
import 'dotenv/config';


// App Configuration
const PORT = process.env.PORT || 7500;
const app = express();


// Initialize Middlewares
app.use(express.json());
app.use(cors());

// API Routes
app.get('/', (req, res) => {
    res.send("API Route, Home Endpoint !");
});


// Server Listening
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});