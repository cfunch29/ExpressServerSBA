//import express 
import express from 'express';

//instantiate router
const router = express.Router();

//GET & POST ROUTES
router.
route("/").
get((req, res) => {
    res.send("Testing")
}).post((req, res) => {
    res.send("Testing post")
});

//PUT & DELETE Routes

router.
route("/:id").
put((req, res) => {
    res.send("Testing Update")
}).delete((req, res) => {
    res.send("Testing Delete")
});



export default router;