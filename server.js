// Imports 
import express from 'express';

//import routes that were separated out 
import contactRoutes from "./routes/contactRoutes.js"
import postRoutes from "./routes/postRoutes.js"
import db from "./database/comments.js"
import fs from 'fs';


//import data from database files 

// import contacts from "./database/contacts.js";
// import posts from './database/posts.js';

//import middleware that were separated out
import { globalErr } from './middleware/middlewares.js';
import logReq from './middleware/logReq.js';


// setups 
const app = express(); //instantiate express into variable 
const PORT = 3000;

// view engine 
app.engine("html", function (filePath, options, cb){
    fs.readFile(filePath, (err, content) => {
        if (err) return cb(err);
        
         let rendered = content.toString();
        if (options && options.list){
            rendered = rendered.replace("#list#", options.list.join(""));
        }
        return cb(null, rendered);
        }
    )
});

// view engine setup 
app.set("views", "./views");
app.set("view engine", "html");
app.use(express.static('./styles'));

// Middleware 
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); //Parses the req body so we can use 
//request log time and req method
app.use(logReq);

// app.use(function(){})


// Routes 
// render view to index
app.get("/", (req, res) => {
    const list = db.map(post => `<li>${post.message}</li>`);
    res.render("index", { list })
});

app.use("/api/contacts", contactRoutes);
app.use("/api/posts", postRoutes);
// app.use("/api/comments", db);

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
