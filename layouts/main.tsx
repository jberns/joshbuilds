import { useRouter } from 'next/router';
import React from 'react';
import { Footer } from '../components/home/Footer';
import { Nav } from '../components/home/Nav';

interface ILayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: ILayoutProps) {
  const router = useRouter();

  //When on the home page set the nav to absolute so the hero image is behind it.
  const path = router.asPath;
  const position = path === '/' ? 'absolute' : 'relative';

  return (
    <div className="relative min-h-screen mr-4">
      <Nav position={position} />
      <main className="">{children}</main>
      <Footer />
    </div>
  );
}
