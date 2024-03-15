import { Suspense, ReactNode } from 'react';
import { Await, useLoaderData } from 'react-router-dom';
import Loader from './Loader';

interface LazyDataLoadProps {
  lazyResolveField: string,
  children: ReactNode
}

type LoaderData = {
  [key: string]: unknown
}

export default function LazyDataLoad ({ lazyResolveField, children }: LazyDataLoadProps) {

  const loaderData = useLoaderData() as LoaderData;

  return (
    <Suspense fallback={<Loader />}>
      <Await resolve={loaderData[lazyResolveField]}>
        {children}
      </Await>
    </Suspense>
  );
}