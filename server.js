// Imports 
import express from 'express';
import mainRoutes from "./routes/mainRoutes.js"
import contacts from "./database/contacts.js";
import posts from './database/posts.js';
import { globalErr } from './middleware/middlewares.js';


// Data 

// setups 
const app = express(); //instantiate express into variable 
const PORT = 3000;

// Middleware 
// app.use(function(){})
app.use(express.json()); //Parses the req body so we can use 

// Routes 
app.get("/home", (req, res) => {

});
app.use("/", mainRoutes);

//POST
// test route 
// app.post("/", (req, res) => {
//     res.send("Testing post")
// });

// // GET 
// app.get("/", (req, res) => {
//     res.send("Testing")
// });

// PUT
// app.put("/", (req, res) => {
//     res.send("Testing Update")
// });

// // DELETE
// app.delete("/", (req, res) => {
//     res.send("Testing Delete")
// });


// Global Err Handling Middleware 
app.use(globalErr);

// Listen 
app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
})
