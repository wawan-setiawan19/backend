import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()

const {DB_URI} = process.env

mongoose.connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

export const db = mongoose.connection;