import express from 'express';
import {
  createProjectController,
  getProjectByIdController,
  getProjectController,
  updateProjectController,
} from '../controllers/project.controller';

const router = express.Router();
router.post('/project', createProjectController);
router.put('/project/:id', updateProjectController);
router.get('/projects', getProjectController);
router.get('/projects/:id', getProjectByIdController);
export default router;
