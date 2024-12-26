import { Suspense } from 'react';
import Banner from './banner/Banner';

export default async function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Banner />
    </Suspense>
  );
}
