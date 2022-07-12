export interface EduProps {
  id: number;
  title: string;
  desc: string;
  media: string;
  content1: string;
  code1?: string;
  content2: string;
  code2?: string;
  content3?: string;
  code3?: string;
  content4?: string;
  code4?: string;
  content5?: string;
  code5?: string;
  content6?: string;
  code6?: string;
}

export type EduPost = Omit<EduProps, 'id'>;
