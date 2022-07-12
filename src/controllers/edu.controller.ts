import logger from '../utils/logger';
import { Request, Response } from 'express';
import { EduPost } from '../types/edu.types';
import {
  createEdutService,
  deleteEduService,
  getEduByIdService,
  getEduService,
  updateEduService,
} from '../services/edu.service';

export const createEduController = async (
  req: Request<{}, {}, EduPost>,
  res: Response
) => {
  const {
    title,
    desc,
    media,
    content1,
    code1,
    content2,
    code2,
    content3,
    code3,
    content4,
    code4,
    content5,
    code5,
    content6,
    code6,
  } = req.body;

  try {
    const edu = await createEdutService({
      title,
      desc,
      media,
      content1,
      code1,
      content2,
      code2,
      content3,
      code3,
      content4,
      code4,
      content5,
      code5,
      content6,
      code6,
    });
    res.status(200).json(edu);
  } catch (e: any) {
    logger.info(e);
    res.status(500).json(e.message);
  }
};

export const updateEdutController = async (
  req: Request<{}, {}, EduPost>,
  res: Response
) => {
  const { id }: any = req.params;
  const {
    title,
    desc,
    media,
    content1,
    code1,
    content2,
    code2,
    content3,
    code3,
    content4,
    code4,
    content5,
    code5,
    content6,
    code6,
  } = req.body;

  try {
    const edu = await updateEduService({
      id,
      title,
      desc,
      media,
      content1,
      code1,
      content2,
      code2,
      content3,
      code3,
      content4,
      code4,
      content5,
      code5,
      content6,
      code6,
    });
    res.status(200).json(edu);
  } catch (e: any) {
    logger.info(e);
    res.status(500).json(e.message);
  }
};

export const getEduController = async (req: Request, res: Response) => {
  try {
    const edu = await getEduService();
    res.status(200).json(edu);
  } catch (e: any) {
    logger.info(e);
    res.status(500).json(e.message);
  }
};

export const deleteEduController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const edu = await deleteEduService(id);
    res.status(200).json(edu);
  } catch (e: any) {
    logger.info(e);
    res.status(500).json(e.message);
  }
};

export const getEduByIdController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const edu = await getEduByIdService(id);
    res.status(200).json(edu);
  } catch (e: any) {
    logger.info(e);
    res.status(500).json(e.message);
  }
};
