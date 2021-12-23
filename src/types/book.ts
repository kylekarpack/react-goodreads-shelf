export type Book = {
  id: string;
  isbn?: string;
  title?: string;
  description?: string;
  author?: string;
  authors?: {
    author: {
      name: string;
    };
  };
  imageUrl?: string;
  link?: string;
};
