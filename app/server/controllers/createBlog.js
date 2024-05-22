const Todo = require("../models/Blog");

exports.createTodo = async (req, res) => {
    try {
        // Extract title, image, and description from request body
        const { title, description } = req.body;
        // Create a new Todo object and insert it into the database
        const response = await Todo.create({ title, description });

        res.status(200).json({
            success: true,
            data: response,
            message: 'Entry Created Successfully'
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            data: "internal server error",
            message: err.message,
        });
    }
}
