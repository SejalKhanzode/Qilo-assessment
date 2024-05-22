
const Blog = require("../models/Blog");

exports.getBlog = async(req,res) => {
    try {
            const blogs = await Blog.find({});

            res.status(200)
            .json({
                success:true,
                data:blogs,
                message:"Entire Blog Data is fetched",
            });
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


exports.getBlogById = async(req, res) => {
    try {
       //extract Blog items basis on id
       const id = req.params.id;
       const blog = await Blog.findById( {_id: id})

       //data forgiven id not found
       if(!blog) {
        return res.status(404).json({
            success:false,
            message:"No Data Found woth Given Id",
        })
       }
       //data for given id FOUND
       res.status(200).json({
        success:true,
        data:blog,
        message: `Blog ${id} data successfully fetched`,
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
