import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import authRoutes from './routes/auth.js';
import todoRoutes from './routes/todoRoute.js';


const app = express();
// Middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const MONGO_URI = 'mongodb+srv://arihant212003:arihant@cluster0.sgxmlbq.mongodb.net/';

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected')).
catch(err => console.error('MongoDB connection error:', err));


app.use('/api/auth', authRoutes);
app.use('/api', todoRoutes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
