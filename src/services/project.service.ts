import { ProjectPost, ProjectProps } from '../types/project.types';
import prisma from '../utils/database';
import logger from '../utils/logger';

export const createProjectService = async ({
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
}: ProjectPost) => {
  try {
    const project = await prisma.project.create({
      data: {
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
      },
    });
    return project;
  } catch (e: any) {
    logger.info(e);
  }
};

export const updateProjectService = async ({
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
}: ProjectProps) => {
  const idInt = parseInt(id as unknown as string);
  const project = await prisma.project.update({
    where: { id: idInt },
    data: {
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
    },
  });
  return project;
};

export const getProjectService = async () => {
  const base = await prisma.project.findMany();
  return base;
};
