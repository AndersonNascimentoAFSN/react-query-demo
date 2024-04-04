import { useState } from "react"
import { usePosts } from "../../hooks";


export function Posts() {
  const [currentPage, setCurrentPage] = useState(1)

  const {
    data: posts,
    isError: isErrorPosts,
    isLoading: isLoadingPosts
  } = usePosts({ currentPage })

  if (isErrorPosts) return <>Error</>;

  if (isLoadingPosts) return <>Loading...</>;

  return (
    <div className="w-screen flex justify-center items-center flex-col">
      <ul>
        {posts?.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>

      <div className="w-screen flex justify-around items-center">
        <button
          className="border bg-blue-600 hover:bg-blue-400 text-white rounded-md w-24 h-12"
          disabled={currentPage <= 0}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Previous
        </button>
        <p className="font-semibold">Page {currentPage}</p>
        <button
          className="border bg-blue-600 hover:bg-blue-400 text-white rounded-md w-24 h-12"
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}