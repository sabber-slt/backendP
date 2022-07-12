import {
  createBaseService,
  getBaseService,
  updateBaseService,
} from '../services/base.service';
import { BasePost } from '../types/base.types';
import logger from '../utils/logger';
import { Request, Response } from 'express';

export const createBaseController = async (
  req: Request<{}, {}, BasePost>,
  res: Response
) => {
  const { title, content, media, slug } = req.body;

  try {
    const base = await createBaseService({ title, content, media, slug });
    res.status(200).json(base);
  } catch (e: any) {
    logger.info(e);
    res.status(500).json(e.message);
  }
};
export const updateBaseController = async (
  req: Request<{}, {}, BasePost>,
  res: Response
) => {
  const { id }: any = req.params;
  const { title, content, media, slug } = req.body;
  console.log(title);

  try {
    const base = await updateBaseService({ title, content, media, slug, id });
    res.status(200).json(base);
  } catch (e: any) {
    logger.info(e);
    res.status(500).json(e.message);
  }
};
export const getBaseController = async (req: Request, res: Response) => {
  try {
    const base = await getBaseService();
    res.status(200).json(base);
  } catch (e: any) {
    logger.info(e);
    res.status(500).json(e.message);
  }
};
