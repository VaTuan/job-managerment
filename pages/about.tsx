import { useRouter } from 'next/dist/client/router';
import React from 'react';

export default function AboutPage() {
    const router = useRouter();
  console.log('Router : ', router.query);
  return <div>About page</div>;
}
export async function getServerSideProps() {
  return {
    props: {}, // will be passed to the page component as props
  };
}
