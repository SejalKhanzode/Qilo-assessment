//import th model
const Blog = require("../models/Blog");

//define route handler
exports.deleteBlog = async(req,res) => {
    try {
        const {id} = req.params;
        await Blog.findByIdAndDelete(id);

        res.json({
            success:true,
            message:"Blog DELETED",
        })
       
    }
    catch(err) {
        console.error(err);
        res.status(500)
        .json({
            success:false,
            error:err.message,
            message:'Server Error',
        });
    }
}
