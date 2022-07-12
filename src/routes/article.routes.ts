import express from 'express';
import {
  createArticleController,
  deleteArticleController,
  getArticleByIdController,
  getArticleController,
  updateArticleController,
} from '../controllers/article.controller';

const router = express.Router();
router.post('/article', createArticleController);
router.put('/article/:id', updateArticleController);
router.get('/article', getArticleController);
router.get('/article/:id', getArticleByIdController);
router.delete('/article/:id', deleteArticleController);
export default router;
