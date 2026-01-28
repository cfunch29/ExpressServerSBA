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

    res.json("Add Message")
});

//PUT & DELETE Routes

router
.route("/:id")
.put((req, res) => {
    res.json("Update Message")
}).delete((req, res) => {
    res.json("Delete Message")
});


//filter route 
router
.route("/:post/posts")
.get((req, res) => {
    let post = req.params.post;

    let filteredPosts = contacts.filter((message) => message.post == post);
    res.json({ filteredPosts });
});

export default router; 

