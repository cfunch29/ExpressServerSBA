// Imports 
import express from 'express';
import db from "./database/database.js";

// Data 

// setups 

const app = express(); //instantiate express into variable 
const PORT = 3000;

// Middleware 

// Routes 

//POST
// test route 
app.post("/", (req, res) => {
    res.send("Testing post")
});

// GET 
app.get("/", (req, res) => {
    res.send("Testing")
});

// PUT
app.put("/", (req, res) => {
    res.send("Testing Update")
});

// DELETE
app.delete("/", (req, res) => {
    res.send("Testing Delete")
});



// Global Err Handling Middleware 
app.use("/", (err, req, res, next) => {
    console.log(err.message)
    res.status(err.status || 500).json({error: err.message});
})

// Listen 
app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
})
