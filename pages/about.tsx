import { useRouter } from 'next/dist/client/router';
import React from 'react';

export default function About() {
  const router = useRouter();
  console.log('About query : ', router.query);

  return (
    <div>
      <h1>About page</h1>
    </div>
  );
}

export async function getServerSideProps() {
  return {
    props: {}, // will be passed to the page component as props
  };
}
