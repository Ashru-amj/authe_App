import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { fileURLToPath, URL } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
dotenv.config();
app.use(cors());
app.use(cookieParser());

mongoose
  .connect(process.env.MONGO, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    writeConcern: {
      w: 'majority',
    },
  })
  .then(() => console.log('mongoose connected'))
  .catch((error) => console.error(error));

app.use(express.json());

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);

// Use path.resolve to get the absolute path of 'build' directory
app.use(express.static(new URL('build', import.meta.url).pathname));

app.get('/', function (req, res) {
  res.sendFile(new URL('build/index.html', import.meta.url).pathname);
});

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  return res.status(statusCode).json({
    success: false,
    message,
    statusCode,
  });
});

app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});
