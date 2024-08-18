import mongoose from "mongoose";
import { DataSchema } from "../Models/usertable.mjs";

export const Data=mongoose.model("Sensordata",DataSchema);