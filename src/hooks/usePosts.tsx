import { useQuery, useQueryClient } from 'react-query';
import { fetchPosts } from '../service/fetchPosts';
import { useEffect } from 'react';

interface UsePostsProps {
  currentPage: number;
}

const MAX_POST_PAGE = 5;

export function usePosts({ currentPage }: UsePostsProps) {
  const queryClient = useQueryClient();

  useEffect(() => {
    if (currentPage < MAX_POST_PAGE) {
      const nextPage = currentPage + 1;
      queryClient.prefetchQuery([
        "posts",
        nextPage,
        () => fetchPosts(nextPage),
      ]);
    }
  }, [currentPage, queryClient]);
  
  return useQuery(
    {
      queryKey: ['posts', currentPage],
      queryFn: () => fetchPosts(currentPage),
      staleTime: 0,
      keepPreviousData: true,
    }
  );
}
