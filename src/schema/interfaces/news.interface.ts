export interface NewsSource {
  id: string;
  name: string;
}

export interface News {
  source: NewsSource;
  author: string;
  title: string;
  description: string;
  url: string;
  publishedAt: Date;
  content: string;
  urlToImage: string;
}
