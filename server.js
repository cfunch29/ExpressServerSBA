// Imports 
import express from 'express';

// Data 

// setups 
const app = express();
const PORT = 3000;

// Middleware 

// Routes 

// Global Err Handling Middleware 
app.use("/", (err, req, res, next) => {
    console.log(err.message)
    res.status(err.status || 500).json({error: err.message});
})

// Listen 
app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
})
