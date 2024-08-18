import mongoose from "mongoose";
import { Data } from "../Services/userService.mjs"; // Adjust path as needed

export const sendingdata = async (req, res, next) => {
    try {
        console.log(req.body);
        const { temperature, humidity, Brightness, roomId } = req.body;

        // Check if all required fields are present
        if (!temperature || !humidity || !Brightness || !roomId) {
            return res.status(400).send('Missing required fields');
        }

        // Format the data
        const Time = `${new Date().getHours()}:${new Date().getMinutes()}`;
        const Datenew = `${new Date().getDate()}.${new Date().getMonth() + 1}.${new Date().getFullYear()}`;

        // Create a new document in MongoDB
        await Data.create({
            temperature,
            humidity,
            Brightness,
            roomId,
            time: Time,
            date: Datenew
        });
        next();
    } catch (error) {
        console.error('Error processing request:', error);
        res.status(500).send('Internal Server Error');
    }
};
