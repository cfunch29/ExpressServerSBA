//import express 
import express from 'express';
import contacts from '../database/contacts.js';

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
    res.json(contacts);
});



export default router;