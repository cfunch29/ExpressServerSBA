import express from 'express';
import posts from "../database/posts.js";

const router = express.Router();

router
.route("/",)
.get((req, res) => {
    res.json(posts);
})

.post((req, res) => {
    const { contactId, message } = req.body;
    if(!contactId || !message){
        return res.status(400).json({ error:"Insufficient Data" });
    }
    const newPost = {
        id: posts.length + 1,
        contactId, 
        message
    };
    posts.push(newPost);
    res.status(201).json(newPost);
});

//PUT & DELETE Routes

router
.route("/:id")
.put((req, res) => {
    const { id } = req.params;
    const { message } = req.body;

    const update = posts.find(p => p.id == id);
    if (!update){
        return res.status(404).json({ error:"Post Not Found!" });
    }
    if (message) update.message = message;
    res.json(update);
})

.delete((req, res) => {
     const { id } = req.params;

     const del = posts.find((post, i) => {
    if (post.id == id) return posts.splice(i, 1) [0];
    });
     if (!del)
        return res.status(404).json({ error: "Post Not Found!" });
    
    res.json(del);
    
});


//filter route 
// get all posts for specific contacts 
router
.route("/:contact/contactId")
.get((req, res) => {
    const { contactId } = req.params;

    let filteredPosts = posts.filter(p => p.contactId == contactId.trim());
    res.json({ filteredPosts });
});

export default router; 

