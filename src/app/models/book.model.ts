export interface BookUser {
  id: number;
  name: string;
}

export interface BookPopularity {
  day: number;
  week: number;
  month: number;
}

export interface Book {
  id: number;
  image: string;
  title: string;
  originalTitle: string;
  author: string;
  country: string;
  year: string;
  status: string;
  tags: string[];
  rate: string;
  view: string;
  likes: string;
  saved: string;
  description: string;
  publisher?: string;
  artist?: string;
  translator?: string;
  users: BookUser[];
  categories: string[];
  popularity: BookPopularity;
}
