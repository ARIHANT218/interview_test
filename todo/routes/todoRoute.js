import express from 'express';
const router = express.Router();


import todoController from '../controller/todoController.js';

router.post('/todos', todoController.createTodo);
router.get('/todos', todoController.getTodos);
router.put('/todos/:id', todoController.updateTodo);

router.delete('/todos/:id', todoController.deleteTodo);

export default router;
