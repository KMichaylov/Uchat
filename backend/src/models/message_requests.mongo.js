import mongoose, { Schema } from "mongoose";

export const messageRequests = new mongoose.Schema({
  requestSender: String,
  requestReceiver: String,
  status: Boolean,
});
