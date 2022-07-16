import { useRouter } from 'next/router';
import React from 'react';

export default function BlogDetailPage() {
  const router = useRouter();
  console.log({ router });

  return <div>this is blog detail , ID : {router.query.idBlog}</div>;
}
