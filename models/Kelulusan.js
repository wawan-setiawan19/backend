import mongoose from "mongoose";

const Kelulusan = mongoose.Schema({
    penempatan:{
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    nama:{
        type: String,
        required: true
    },
    asal:{
        type: String,
        required: true
    },
})

export default mongoose.model('Kelulusan', Kelulusan)