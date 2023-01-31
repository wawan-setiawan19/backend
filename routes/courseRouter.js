import express from "express"
import { deletecourse, getCourseById, getCourses, saveCourse, updateCourse } from "../controllers/CourseController.js";

const courseRouter = express.Router();

courseRouter.get('/', getCourses)
courseRouter.get('/:id', getCourseById)
courseRouter.post('/', saveCourse)
courseRouter.patch('/:id', updateCourse)
courseRouter.delete('/:id', deletecourse)

export default courseRouter