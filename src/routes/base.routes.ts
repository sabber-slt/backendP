import express from 'express';
import {
  createBaseController,
  getBaseController,
  updateBaseController,
} from '../controllers/base.controller';

const router = express.Router();
router.post('/base', createBaseController);
router.put('/base/:id', updateBaseController);
router.get('/base', getBaseController);
export default router;
