import express from 'express';
import ProductRouter from './routes/productRouter';
import UserRouter from './routes/userRouter';
import OrderRouter from './routes/orderRouter';
import LoginRouter from './routes/loginRouter';

const app = express();

app.use(express.json());
app.use('/products', ProductRouter);
app.use('/users', UserRouter);
app.use('/orders', OrderRouter);
app.use('/login', LoginRouter);

export default app;