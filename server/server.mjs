import express from 'express';
import mongoose from 'mongoose';
import { sendingdata } from './BusinessLogic/userlogin.mjs'; // Adjust path as needed
mongoose.connect('mongodb+srv://doalb:doalb@cluster0.dmhzf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(()=>{console.log("mongoDb connected")})
.catch((err)=>{console.log("error",err)});
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Your route handler
app.post('/send-data', sendingdata,(req,res)=>{
  res.send({"msg":"success"})
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
