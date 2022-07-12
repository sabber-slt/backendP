import { BasePost, BaseProps } from '../types/base.types';
import prisma from '../utils/database';
import logger from '../utils/logger';

export const createBaseService = async ({
  title,
  content,
  media,
  slug,
}: BasePost) => {
  try {
    const base = await prisma.base.create({
      data: {
        title,
        content,
        media,
        slug,
      },
    });
    return base;
  } catch (e: any) {
    logger.info(e);
  }
};

export const updateBaseService = async ({
  title,
  content,
  media,
  slug,
  id,
}: BaseProps) => {
  const idInt = parseInt(id as unknown as string);
  const base = await prisma.base.update({
    where: { id: idInt },
    data: {
      title,
      content,
      media,
      slug,
    },
  });
  return base;
};

export const getBaseService = async () => {
  const base = await prisma.base.findMany();
  return base;
};
