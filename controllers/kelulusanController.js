import Kelulusan from "../models/Kelulusan.js"


const getKelulusan = async (req, res) => {
    try {
        const kelulusan = await Kelulusan.find()
        res.json(kelulusan)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const getKelulusanById = async (req, res) => {
    try {
        const kelulusan = await Kelulusan.findById(req.params.id)
        res.json(kelulusan)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

const saveKelulusan = async (req, res) => {
    const kelulusan = new Kelulusan(req.body)
    try {
        const savekelulusan = await kelulusan.save();
        res.status(201).json(kelulusan)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

const updateKelulusan = async (req, res) => {
    const cekId = await Kelulusan.findById(req.params.id)
    if(!cekId) return res.status(404).json({message: "Data tidak ditemukan"});
    try {
        const updatekelulusan = await Kelulusan.updateOne({_id: req.params.id}, {$set: req.body});
        res.status(200).json(updatekelulusan)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

const deleteKelulusan = async (req, res) => {
    const cekId = await Kelulusan.findById(req.params.id)
    if(!cekId) return res.status(404).json({message: "Data tidak ditemukan"})
    try {
        const deletekelulusan = await Kelulusan.deleteOne({_id: req.params.id})
        res.status(200).json(deletekelulusan)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

export {getKelulusan, getKelulusanById, saveKelulusan, deleteKelulusan, updateKelulusan}