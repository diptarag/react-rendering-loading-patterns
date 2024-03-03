import { ReactNode, Suspense } from 'react';
import Loader from './Loader';

interface LazyLoadProps {
  children: ReactNode
}

export default function LazyLoad ({ children }: LazyLoadProps) {
  return (
    <Suspense fallback={<Loader />}>
      {children}
    </Suspense>
  )
}