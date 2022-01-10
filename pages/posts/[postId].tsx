import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import React from 'react';

type Post = {
  id: string;
  title: string;
  body: string;
};
interface PostPageProps {
  post: Post;
}
export default function PostPage({post} : PostPageProps) {
    console.log({ post });

  return (
    <div>
      <p>{post.id}</p>
      <p>{post.title}</p>
      <p>{post.body}</p>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  console.log('\n GET STATIC PATH');
  const response = await fetch('https://jsonplaceholder.typicode.com/posts?_page=1');
  const data: Post[] = await response.json();
  return {
    paths: data.map((post: Post) => ({ params: { postId: post.id.toString() } })),
    fallback: false,
  };
};
/**
 * TODO : func run in server-side
 */
export const getStaticProps: GetStaticProps<PostPageProps> = async (context: GetStaticPropsContext) => {
  console.log('\n GET STATIC PROPS', context.params?.postId);

  const postId = context.params?.postId;
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  const data = await response.json();

  return {
    props: {
      // you should format data response for client
      post: data,
    }, // will be passed to the page component as props
  };
};
