import { useQuery } from "@tanstack/react-query";
import http from "../../axios.config";
import { News } from "../schema/interfaces/news.interface";
import { useQueryResults } from "../schema/interfaces/query.interface";

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
