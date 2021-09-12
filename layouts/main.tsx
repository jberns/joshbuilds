import React from 'react';
import { Footer } from '../components/home/Footer';
import { Nav } from '../components/home/Nav';

interface ILayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: ILayoutProps) {
  return (
    <>
      <Nav />
      <main className="">{children}</main>
      <Footer />
    </>
  );
}
