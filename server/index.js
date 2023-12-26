
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();
dotenv.config();
app.use(cors());
app.use(cookieParser());
mongoose.connect(process.env.MONGO,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    writeConcern: {
        w: 'majority',  // Note: Without the semicolon
    },
})
  .then(() => console.log('mongoose connected'))
  .catch((error) => console.error(error));

app.use(express.json())

app.use('/api/user', userRoutes);
app.use('/api/auth',authRoutes)



app.use((err, req,res,next)=>{
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  return res.status(statusCode).json({
    success:false,
    message,
    statusCode,

  })
})

app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});


