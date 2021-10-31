export interface Card {
  title?: string;
  subtitle?: string;
  template?: string;
  type?: string;
  icon: string;
  customIcon?: boolean;
  iconLink?: string;
  content?: string;
  imagePath: string;
  imageAlt?: string;
  showMore: boolean;
}
