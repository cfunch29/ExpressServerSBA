// Imports 
import express from 'express';

//import routes that were separated out 
import mainRoutes from "./routes/mainRoutes.js"

//import data from database files 
import contacts from "./database/contacts.js";
import posts from './database/posts.js';

//import middleware that were separated out
import { globalErr } from './middleware/middlewares.js';
import logReq from './middleware/logReq.js';

// Data 

// setups 
const app = express(); //instantiate express into variable 
const PORT = 3000;

// Middleware 

//request log time and req method
app.use(logReq);

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
