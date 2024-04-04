import { IPost } from "../types";

const MAX_POST_PAGE = 5;

export const fetchPosts = async (pageNumber: number) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=${MAX_POST_PAGE}&_page=${pageNumber}`
  );
  const posts = (await response.json()) as IPost[];
  return posts;
};