export interface ProjectProps {
  id: number;
  title: string;
  desc: string;
  media?: string;
  content1: string;
  media1?: string;
  content2: string;
  media2?: string;
  content3?: string;
  media3?: string;
  content4?: string;
  media4?: string;
  download?: string;
}

export type ProjectPost = Omit<ProjectProps, 'id'>;
