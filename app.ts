import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import userRoutes from './routes/user.routes';
import postRoutes from './routes/post.routes';

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/users', userRoutes);
app.use('/posts', postRoutes);

export default app;
