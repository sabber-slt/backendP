import { ProjectPost, ProjectProps } from '../types/project.types';
import logger from '../utils/logger';
import { Request, Response } from 'express';
import {
  createProjectService,
  getProjectService,
  updateProjectService,
} from '../services/project.service';

export const createProjectController = async (
  req: Request<{}, {}, ProjectPost>,
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
    download,
  } = req.body;

  try {
    const base = await createProjectService({
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
      download,
    });
    res.status(200).json(base);
  } catch (e: any) {
    logger.info(e);
    res.status(500).json(e.message);
  }
};

export const updateProjectController = async (
  req: Request<{}, {}, ProjectPost>,
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
    download,
  } = req.body;

  try {
    const project = await updateProjectService({
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
      download,
    });
    res.status(200).json(project);
  } catch (e: any) {
    logger.info(e);
    res.status(500).json(e.message);
  }
};

export const getProjectController = async (req: Request, res: Response) => {
  try {
    const project = await getProjectService();
    res.status(200).json(project);
  } catch (e: any) {
    logger.info(e);
    res.status(500).json(e.message);
  }
};
