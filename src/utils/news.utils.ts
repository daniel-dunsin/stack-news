import { News } from "../schema/interfaces/news.interface";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const bookmarkNews = async (news: News) => {
  let allNews: News[] | string | null = (await AsyncStorage.getItem("news")) || [];

  try {
    allNews = <News[]>JSON.parse(allNews as string);
  } catch (error) {
    allNews = [];
  }

  allNews = [...allNews, news];

  await AsyncStorage.setItem("news", JSON.stringify(allNews));
};

export const getBookmarkedNews = async (): Promise<News[]> => {
  let news: News[] | string | null = await AsyncStorage.getItem("news");

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

export const removeNewsFromBookmark = async (news: News) => {
  let bookmarks = await getBookmarkedNews();

  bookmarks = bookmarks.filter(
    (bookmark) => `${bookmark.title}${bookmark.author}${bookmark.url}` !== `${news.title}${news.author}${news.url}`
  );

  await AsyncStorage.setItem("news", JSON.stringify(bookmarks));
};
