export interface BaseProps {
  id: number;
  title: string;
  content: string;
  media: string;
  slug: string;
}

export type BasePost = Omit<BaseProps, 'id'>;
