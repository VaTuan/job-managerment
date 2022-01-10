import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import React from 'react';
import Link from 'next/link';

type Post = {
  id: string;
  title: string;
};
interface PostListPageProps {
  posts: Post[];
}

export default function PostPage({ posts }: PostListPageProps) {
  console.log({ posts });

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <Link href={`posts/${post.id}`}>
            <a> {post.title}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
}

/**
 * TODO : func run in server-side
 */
export const getStaticProps: GetStaticProps<PostListPageProps> = async (context: GetStaticPropsContext) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts?_page=1');
  const data: Post[] = await response.json();

  return {
    props: {
      // you should format data response for client
      posts: data.map((x) => ({ id: x.id, title: x.title })),
    }, // will be passed to the page component as props
  };
};
