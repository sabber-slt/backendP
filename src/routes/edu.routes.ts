import express from 'express';
import {
  createEduController,
  deleteEduController,
  getEduByIdController,
  getEduController,
  updateEdutController,
} from '../controllers/edu.controller';

const router = express.Router();
router.post('/edu', createEduController);
router.put('/edu/:id', updateEdutController);
router.get('/edu', getEduController);
router.get('/edu/:id', getEduByIdController);
router.delete('/edu/:id', deleteEduController);
export default router;
