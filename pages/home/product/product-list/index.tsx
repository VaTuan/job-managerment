import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
export default function ProductListPage() {
  const router = useRouter();

  console.log({ router });

  return (
    <div>
      <ul>
        <li>
          <a>
            <Link href={`${router.pathname}/product-1`}>Product 1</Link>
          </a>
        </li>
        <li>
          <a>
            {' '}
            <Link href={`${router.pathname}/product-2`}>Product 2</Link>
          </a>
        </li>
        <li>
          <a>
            {' '}
            <Link href={`${router.pathname}/product-3`}>Product 3</Link>
          </a>
        </li>
        <li>
          <a>
            {' '}
            <Link href={`${router.pathname}/product-4`}>Product 4</Link>
          </a>
        </li>
      </ul>
    </div>
  );
}
