import mongoose, {Schema} from "mongoose";

export const chats = new mongoose.Schema({
    members: [String]
}) 