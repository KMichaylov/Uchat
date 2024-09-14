import { Schema } from "mongoose";
export const usersSchema = new mongoose.Schema({
  userName: String,
  email: String,
  password: String,
  profilePicture: Buffer,
  messageContacts: [String],
  biography: String,
});
