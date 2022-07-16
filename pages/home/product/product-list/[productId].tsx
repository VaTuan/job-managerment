import { useRouter } from 'next/router';
import React from 'react';

export default function ProductDetails() {
  const router = useRouter();
  return <div>This is ProductDetails Page, with Id : {router.query.productId}</div>;
}
