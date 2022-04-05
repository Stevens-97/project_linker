import React from "react";
import SearchBar from "../SearchBar/SearchBar";

interface projectLayout {
  projectId: number;
  projectTitle: string;
  projectText: string;
  projectImages: string[];
  projectTags: string[];
}

export default function ExploreSection() {
  const { search } = window.location;

  const filterPosts = (posts: any, query: any) => {
    if (!query) {
      return posts;
    }

    return posts.filter((post: any) => {
      const postTags = post.projectTags.map((tag: any) => tag.toLowerCase());
      return postTags.includes(query);
    });
  };
  const query = new URLSearchParams(search).get("s");
  const filteredPosts = filterPosts(posts, query);

  return (
    <div>
      <SearchBar />
      <ul>
        {filteredPosts.map((post: projectLayout) => (
          <li key={post.projectId}>{post.projectTitle}</li>
        ))}
      </ul>
    </div>
  );
}

const posts = [
  {
    projectId: 1,
    projectTitle: "First project!",
    projectText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    projectImages: [
      "https://images.unsplash.com/photo-1570824104453-508955ab713e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1011&q=80",
      "https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    ],
    projectTags: ["cats", "really cute"],
  },
  {
    projectId: 2,
    projectTitle: "Second project!",
    projectText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    projectImages: [
      "https://images.unsplash.com/photo-1548802673-380ab8ebc7b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
      "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    ],
    projectTags: ["cats", "cute"],
  },
];
