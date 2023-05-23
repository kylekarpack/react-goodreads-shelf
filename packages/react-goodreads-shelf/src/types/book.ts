export type Book = {
  id: string;
  isbn?: string;
  asin?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  author?: string;
  authors?: {
    author: {
      name: string;
    };
  };
  imageUrl?: string;
  link?: string;
  rating?: number;
  dateRead?: Date;
  dateAdded?: Date;
};
