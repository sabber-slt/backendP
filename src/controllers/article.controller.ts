import logger from '../utils/logger';
import { Request, Response } from 'express';
import { ArticlePost } from '../types/article.types';
import {
  createArticletService,
  deleteArticleService,
  getArticleByIdService,
  getArticleService,
  updateArticleService,
} from '../services/article.service';

export const createArticleController = async (
  req: Request<{}, {}, ArticlePost>,
  res: Response
) => {
  const {
    title,
    desc,
    media,
    content1,
    media1,
    content2,
    media2,
    content3,
    media3,
    content4,
    media4,
    content5,
    media5,
  } = req.body;

  try {
    const article = await createArticletService({
      title,
      desc,
      media,
      content1,
      media1,
      content2,
      media2,
      content3,
      media3,
      content4,
      media4,
      content5,
      media5,
    });
    res.status(200).json(article);
  } catch (e: any) {
    logger.info(e);
    res.status(500).json(e.message);
  }
};

export const updateArticleController = async (
  req: Request<{}, {}, ArticlePost>,
  res: Response
) => {
  const { id }: any = req.params;
  const {
    title,
    desc,
    media,
    content1,
    media1,
    content2,
    media2,
    content3,
    media3,
    content4,
    media4,
    content5,
    media5,
  } = req.body;

  try {
    const article = await updateArticleService({
      id,
      title,
      desc,
      media,
      content1,
      media1,
      content2,
      media2,
      content3,
      media3,
      content4,
      media4,
      content5,
      media5,
    });
    res.status(200).json(article);
  } catch (e: any) {
    logger.info(e);
    res.status(500).json(e.message);
  }
};

export const getArticleController = async (req: Request, res: Response) => {
  try {
    const article = await getArticleService();
    res.status(200).json(article);
  } catch (e: any) {
    logger.info(e);
    res.status(500).json(e.message);
  }
};

export const deleteArticleController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const article = await deleteArticleService(id);
    res.status(200).json(article);
  } catch (e: any) {
    logger.info(e);
    res.status(500).json(e.message);
  }
};

export const getArticleByIdController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const article = await getArticleByIdService(id);
    res.status(200).json(article);
  } catch (e: any) {
    logger.info(e);
    res.status(500).json(e.message);
  }
};
