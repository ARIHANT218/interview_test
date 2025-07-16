import todoModel from '../models/todoModel.js';


const createTodo = async (req,res)=>{
    const {title, Description, DueDate, Category} = req.body;
    if(!title || !Description || !DueDate || !Category){
        return res.status(400).json({ message: "All fields are required" });
    }
    try{
        const todo = new todoModel({
            title, Description, DueDate, Category
        })
        await todo.save();
        return res.json({todo});

    }
    catch(err){
        console.error(err);
        return res.status(400).json({ message: "Server error" });
    }

}

const getTodos = async (req, res) => {
    try {
        const todos = await todoModel.find();
        return res.json({ todos });
    } catch (err) {
        console.error(err);
        return res.status(400).json({ message: "internal error" });
    }
};
const updateTodo = async (req, res) => {
    const { id } = req.params;
    const { title, Description, DueDate, Category } = req.body;

    if (!title || !Description || !DueDate || !Category) {
        return res.status(400).json({ message: "All fields are required" });
    }

    try {
        const todo = await todoModel.findByIdAndUpdate(id, { title, Description, DueDate, Category }, { new: true });
        if (!todo) {
            return res.status(404).json({ message: "Todo not found" });
        }
        return res.json({ todo });
    } catch (err) {
        console.error(err);
        return res.status(400).json({ message: "Server error" });
    }
};
const deleteTodo = async (req, res) => {

    const { id } = req.params;
    try { 
        const todo = await todoModel.findByIdAndDelete(id);
        if (!todo) {
            return res.status(404).json({ message: "Todo not found" });
        }
        return res.json({ message: "Todo deleted successfully" });
    } catch (err) {
        console.error(err);
        return res.status(400).json({ message: "Server error" });
    }
}
export default {
    createTodo,
    getTodos,
    updateTodo,
    deleteTodo
};