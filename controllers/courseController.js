import Course from "../models/Courses.js";

const getCourses = async (req, res) => {
    try {
        const courses = await Course.find()
        res.json(courses)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const getCourseById = async (req, res) => {
    try {
        const course = await Course.findById(req.params.id)
        res.json(course)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

const saveCourse = async (req, res) => {
    const course = new Course(req.body)
    try {
        const savecourse = await course.save();
        res.status(201).json(savecourse)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

const updateCourse = async (req, res) => {
    const cekId = await Course.findById(req.params.id)
    if(!cekId) return res.status(404).json({message: "Data tidak ditemukan"});
    try {
        const updatecourse = await Course.updateOne({_id: req.params.id}, {$set: req.body});
        res.status(200).json(updatecourse)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

const deletecourse = async (req, res) => {
    const cekId = await Course.findById(req.params.id)
    if(!cekId) return res.status(404).json({message: "Data tidak ditemukan"})
    try {
        const deletecourse = await Course.deleteOne({_id: req.params.id})
        res.status(200).json(deletecourse)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

export {getCourses, getCourseById, deletecourse, saveCourse, updateCourse}