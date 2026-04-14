import { taskModel } from "../Models/taskModel.js";


export const createTask=async (req,res)=>{
    const data=req.body;
    try {
        const task=new taskModel(data);
       await task.save();

       res.status(200).json({message:'Task is created',success:true});
    } catch (error) {
        res.status(500).json({message:'Failed to create task',success:false});
        console.log(error);
    }
}


export const fetchAllTasks=async (req,res)=>{
    try {
        const data=await taskModel.find({});

       res.status(200).json({message:'All tasks fetched successfully',success:true,data});
    } catch (error) {
        res.status(500).json({message:'Failed to get all tasks',success:false});
        console.log(error);
    }
}

export const updateTaskById=async (req,res)=>{
    try {
        const id=req.params.id;
        const body=req.body;
        const obj={$set:{...body}};
        await taskModel.findByIdAndUpdate(id,obj);

       res.status(200).json({message:'Task updated successfully',success:true});
    } catch (error) {
        res.status(500).json({message:'Failed to update task',success:false});
        console.log(error);
    }
}


export const deleteTaskById=async (req,res)=>{
    try {
        const id=req.params.id;
        await taskModel.findByIdAndDelete(id);

       res.status(200).json({message:'task deleted successfully',success:true});
    } catch (error) {
        res.status(500).json({message:'Failed to delete task',success:false});
        console.log(error);
    }
}

