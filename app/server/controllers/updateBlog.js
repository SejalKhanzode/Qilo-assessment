//import th model
const Blog = require("../models/Blog");

//define route handler
exports.updateBlog = async(req,res) => {
    try {
        const {id} = req.params;
        const {title, description} = req.body;

        const blog = await Blog.findByIdAndUpdate(
            {_id:id},
            {title, description, updatedAt: Date.now()},
        )

        res.status(200).json({
            success:true,
            data:blog,
            message: `Updated Successfully`,
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
