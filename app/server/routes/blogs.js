const express  = require("express");
const router = express.Router();

//import controller
const {createBlog} = require("../controllers/createBlog");
const {getBlog, getBlogById} = require("../controllers/getBlog");
const {updateBlog} = require("../controllers/updateBlog");
const {deleteBlog} =  require("../controllers/deleteBlog");

//define APi routes
router.post("/createBlog", createBlog);
router.get("/getBlog", getBlog);
router.get("/getBlog/:id", getBlogById);
router.put("/updateBlog/:id", updateBlog);
router.delete("/deleteBlog/:id", deleteBlog);

module.exports = router;