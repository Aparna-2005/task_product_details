'use client';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      router.push('/Gallery');
    }
  }, []);
  return null;
}
