export interface ArticleProps {
  id: number;
  title: string;
  desc: string;
  media: string;
  content1: string;
  media1?: string;
  content2: string;
  media2?: string;
  content3?: string;
  media3?: string;
  content4?: string;
  media4?: string;
  content5?: string;
  media5?: string;
}

export type ArticlePost = Omit<ArticleProps, 'id'>;
