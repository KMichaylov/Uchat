import mongoose, { Schema } from "mongoose";

export const messages = new mongoose.Schema(
  {
    // Get this from chats as a reference
    chatId: mongoose.ObjectId,
    sender: String,
    messageContent: Schema.Types.Mixed,
    isSeen: Boolean,
  },
  { timestamps: true }
);
