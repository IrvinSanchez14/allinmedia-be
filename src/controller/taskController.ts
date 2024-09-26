import { Request, Response } from 'express';
import { taskModel } from '../models/taskModel';

export const getTasks = async (req: Request, res: Response) => {
  const db = await taskModel();
  const tasks = await db.all('SELECT * FROM tasks');
  res.json(tasks);
};

export const addTasks = async (req: Request, res: Response) => {
  const { title, completed } = req.body;
  const db = await taskModel();
  await db.run('INSERT INTO tasks (title, completed) VALUES (?, ?)', [title, completed]);
  res.status(201).json({ message: 'Task added' });
};

export const updateTask = async (req: Request, res: Response) => {
    const { title, completed } = req.body;
    const db = await taskModel();
    await db.run('UPDATE tasks SET title = ?, completed = ? WHERE id = ?', [title, completed, req.params.id]);
    res.status(201).json({ message: 'Task updated' });
};

export const deleteTask = async (req: Request, res: Response) => {
    const db = await taskModel();
    await db.run('DELETE FROM tasks WHERE id = ?', [req.params.id]);
    res.status(201).json({ message: 'Task deleted' });
};