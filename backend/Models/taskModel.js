import mongoose from "mongoose";

const taskSchema=new mongoose.Schema({
   taskName:{
    type:String,
    required:true
   },
   isDone:{
    type:Boolean,
    required:true
   }
})

export const taskModel=mongoose.model('todos',taskSchema);