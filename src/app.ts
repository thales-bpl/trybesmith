import express from 'express';
import ProductRouter from './routes/productRouter';
import UserRouter from './routes/userRouter';

const app = express();

app.use(express.json());
app.use('/products', ProductRouter);
app.use('/users', UserRouter);

export default app;