import { gql } from "@apollo/client";
import { getClient } from "../../src/lib/apollo";
import { Post } from "../../types";
import Hero from "@/components/Hero";


export default async function Home() {
  // const { data } = await getClient().query({ query: GET_POSTS });

  // if (!data || !data.posts) return <p>No data available</p>;

  return (
    <div>
      <Hero />
      <div className="h-screen"></div>
    </div>
  );
}
