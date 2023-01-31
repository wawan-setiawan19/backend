import express from "express"
import { deleteKelulusan, getKelulusan, getKelulusanById, saveKelulusan, updateKelulusan } from "../controllers/kelulusanController.js";


const lulusRouter = express.Router();

lulusRouter.get('/', getKelulusan)
lulusRouter.get('/:id', getKelulusanById)
lulusRouter.post('/', saveKelulusan)
lulusRouter.patch('/:id', updateKelulusan)
lulusRouter.delete('/:id', deleteKelulusan)

export default lulusRouter