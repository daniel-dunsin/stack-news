import { useQuery } from "@tanstack/react-query";
import http from "../../axios.config";
import { News } from "../schema/interfaces/news.interface";
import { useQueryResults } from "../schema/interfaces/query.interface";
import { Platform } from "react-native";

export const useGetBreakingNews = (): useQueryResults<News[]> => {
  const { data, isLoading, refetch, isError } = useQuery<News[]>({
    queryKey: ["useGetBreakingNews"],
    queryFn: async () => {
      const response = await http.get(`/top-headlines?country=us`);
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
        const response = await http.get(`/everything?q=sport`);
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
