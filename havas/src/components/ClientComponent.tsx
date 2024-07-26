"use client"; // O arquivo precisa do pragma "use client"

import { gql, useQuery } from "@apollo/client";
import { Post } from "../../types";

const GET_POSTS = gql`
  query GetPosts {
    posts {
      nodes {
        id
        title
        content
      }
    }
  }
`;

export default function ClientComponent() {
  const { loading, error, data } = useQuery<{ posts: { nodes: Post[] } }>(GET_POSTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  if (!data || !data.posts) return <p>No data available</p>;

  return (
    <div>
      <h1>WordPress Posts</h1>
      {data.posts.nodes.map((post: Post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      ))}
    </div>
  );
}
