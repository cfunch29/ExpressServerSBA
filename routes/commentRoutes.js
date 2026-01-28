//import express 
import express from 'express';
import comments from '../database/comments.js';

//instantiate router
const router = express.Router();

//GET & POST ROUTES
// router
// .route("/")
// .get((req, res) => {
//     res.send("Get Contact")
// })

router
.route("/",)
.get((req, res) => {
    res.json(comments);
});



export default router;