import mongoose from "mongoose";

export const DataSchema= new mongoose.Schema({
    temperature:{
        type:String,
        required:true,
    },
    humidity:{
        type:String,
        required:true,
    },
    Brightness:{
        type:String,
        required:true,
    },
    roomId:{
        type:String,
        required:true,
    },
    time:{
        type:String,
        required:true,
    },
    date:{
        type:String,
        required:true,
    }
    },
    {timestamps:true}
)