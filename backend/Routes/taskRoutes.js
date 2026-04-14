import express from 'express';
import { createTask, deleteTaskById, fetchAllTasks, updateTaskById } from '../Controllers/taskController.js';
const router=express.Router();

///craete a task
router.post('/',createTask);
router.get('/',fetchAllTasks);
router.put('/:id',updateTaskById);
router.delete('/:id',deleteTaskById);

export default router;
