import { useQuery } from "@tanstack/react-query";
import http from "../../axios.config";
import { News } from "../schema/interfaces/news.interface";
import { useQueryResults } from "../schema/interfaces/query.interface";
import { Platform } from "react-native";
import { NewsCategories } from "../schema/enums/news.enum";
import { useEffect } from "react";

export const useGetBreakingNews = (): useQueryResults<News[]> => {
  const { data, isLoading, refetch, isError } = useQuery<News[]>({
    queryKey: ["useGetBreakingNews"],
    queryFn: async () => {
      const response = await http.get(`/top-headlines?country=us&pageSize=40`);
      return response?.data?.articles;
    },
  });

  return {
    data,
    isLoading,
    refetch,
    isError,
  };
};

export const useGetRecommendedNews = (): useQueryResults<News[]> => {
  const { data, isLoading, refetch, isError } = useQuery<News[]>({
    queryKey: ["useGetRecommendedNews"],
    queryFn: async () => {
      try {
        const response = await http.get(`/everything?q=sport&pageSize=40`);
        return response?.data?.articles;
      } catch (error) {
        console.log(error);
      }
    },
  });

  return {
    data,
    isLoading,
    refetch,
    isError,
  };
};

export const useGetNews = (category: NewsCategories): useQueryResults<News[]> => {
  const { data, isLoading, refetch, isError, isRefetching } = useQuery<News[]>({
    queryKey: ["useGetRecommendedNews"],
    queryFn: async () => {
      try {
        const response = await http.get(`/everything?q=${category}&pageSize=40`);
        return response?.data?.articles;
      } catch (error) {
        console.log(error);
      }
    },
  });

  useEffect(() => {
    refetch();
  }, [category]);

  return {
    data,
    isLoading,
    refetch,
    isError,
    isRefetching,
  };
};
