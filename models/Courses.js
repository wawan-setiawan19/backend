import mongoose from "mongoose";

const Course = mongoose.Schema({
    category:{
        type: String,
        required: true
    },
    title:{
        type: String,
        required: true
    },
    teacher:{
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true
    },
})

export default mongoose.model('Course', Course)