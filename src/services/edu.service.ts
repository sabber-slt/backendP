import { EduPost, EduProps } from '../types/edu.types';
import prisma from '../utils/database';
import logger from '../utils/logger';

export const createEdutService = async ({
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
}: EduPost) => {
  try {
    const edu = await prisma.edu.create({
      data: {
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
      },
    });
    return edu;
  } catch (e: any) {
    logger.info(e);
  }
};

export const updateEduService = async ({
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
}: EduProps) => {
  const idInt = parseInt(id as unknown as string);
  const edu = await prisma.edu.update({
    where: { id: idInt },
    data: {
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
    },
  });
  return edu;
};

export const getEduService = async () => {
  const edu = await prisma.edu.findMany();
  return edu;
};

export const deleteEduService = async (id: string) => {
  const idInt = parseInt(id as unknown as string);
  const article = await prisma.edu.delete({
    where: { id: idInt },
  });
  return article;
};

export const getEduByIdService = async (id: string) => {
  const idInt = parseInt(id as unknown as string);
  const article = await prisma.edu.findMany({
    where: { id: idInt },
  });
  return article;
};
