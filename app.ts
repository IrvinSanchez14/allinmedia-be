import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'
import taskRouter from './src/routes/tasksRoutes'

//For env File 
dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());

app.use(express.json());

app.use('/api', taskRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});