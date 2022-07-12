import { ArticlePost, ArticleProps } from '../types/article.types';
import prisma from '../utils/database';
import logger from '../utils/logger';

export const createArticletService = async ({
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
}: ArticlePost) => {
  try {
    const article = await prisma.article.create({
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
        content5,
        media5,
      },
    });
    return article;
  } catch (e: any) {
    logger.info(e);
  }
};

export const updateArticleService = async ({
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
}: ArticleProps) => {
  const idInt = parseInt(id as unknown as string);
  const article = await prisma.article.update({
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
      content5,
      media5,
    },
  });
  return article;
};

export const getArticleService = async () => {
  const edu = await prisma.article.findMany();
  return edu;
};

export const deleteArticleService = async (id: string) => {
  const idInt = parseInt(id as unknown as string);
  const article = await prisma.article.delete({
    where: { id: idInt },
  });
  return article;
};

export const getArticleByIdService = async (id: string) => {
  const idInt = parseInt(id as unknown as string);
  const article = await prisma.article.findMany({
    where: { id: idInt },
  });
  return article;
};
