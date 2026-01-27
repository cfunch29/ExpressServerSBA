//import express 
import express from 'express';

//instantiate router
const router = express.Router();


//GET & POST ROUTES
router.
route("/").
get((req, res) => {
    res.send("Get User")
}).post((req, res) => {
    res.send("Add User")
});

//PUT & DELETE Routes

router.
route("/:id").
put((req, res) => {
    res.send("Update User")
}).delete((req, res) => {
    res.send("Delete User")
});



export default router;