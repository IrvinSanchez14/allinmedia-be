import { Router } from 'express';
import { addTasks, getTasks } from '../controller/taskController';

const router = Router();

router.get('/tasks', getTasks);
router.post('/tasks', addTasks);
router.patch('/tasks/:id', addTasks);
router.delete('/tasks/:id', addTasks);

export default router;
