import express from 'express';
import dotenv from 'dotenv';
import {connect_DB} from './Models/db.js';
import taskRouter from './Routes/taskRoutes.js';
import bodyParser from 'body-parser';
import cors from 'cors';

const app=express();
dotenv.config();

connect_DB();
const port=process.env.PORT || 8080;

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use('/tasks',taskRouter);

app.get('/',(req,res)=>{
    res.send("Hello from server.");
})

app.listen(port,(req,res)=>{
    console.log(`App listening to port : ${port}`)
});