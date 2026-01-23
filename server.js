// Imports 
import express from 'express';

// Data 

// setups 

const app = express(); //instantiate express into variable 
const PORT = 3000;

// Middleware 

// Routes 

//POST

// GET 

// PUT

// DELETE



// Global Err Handling Middleware 
app.use("/", (err, req, res, next) => {
    console.log(err.message)
    res.status(err.status || 500).json({error: err.message});
})

// Listen 
app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
})
