 import mongoose from 'mongoose';
import todoComtroller from '../controller/todoController.js';

const todoSchema = new mongoose.Schema({
    title :{
        type:String,
        required: true
    },
    Description :{
        type:String,
    },
    DueDate:{
        type:Date,
       
    },
    Category:{
        type:String,
    }

})

const Todo = mongoose.model('Todo', todoSchema);
export default Todo;
