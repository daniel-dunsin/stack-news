import { News } from "../schema/interfaces/news.interface";
import * as SecureStore from "expo-secure-store";

export const bookmarkNews = async (news: News) => {
  let allNews: News[] | string | null = await SecureStore.getItemAsync("news");

  try {
    allNews = <News[]>JSON.parse(allNews as string);
  } catch (error) {
    allNews = [];
  }

  allNews = [...allNews, news];

  await SecureStore.setItemAsync("news", JSON.stringify(allNews));
};

export const getBookmarkedNews = async (): Promise<News[]> => {
  let news: News[] | string | null = await SecureStore.getItemAsync("news");

  try {
    news = <News[]>JSON.parse(news as string);
  } catch (error) {
    news = [];
  }

  return news;
};

export const checkNewsInBookmarks = async (news: News): Promise<boolean> => {
  const bookmarks = await getBookmarkedNews();

  const inBookmarks = bookmarks.find(
    (bookmark) => `${bookmark.title}${bookmark.author}${bookmark.url}` === `${news.title}${news.author}${news.url}`
  );

  return inBookmarks ? true : false;
};
