import express from 'express';
import {
  createProjectController,
  getProjectController,
  updateProjectController,
} from '../controllers/project.controller';

const router = express.Router();
router.post('/project', createProjectController);
router.put('/project/:id', updateProjectController);
router.get('/projects', getProjectController);
export default router;
