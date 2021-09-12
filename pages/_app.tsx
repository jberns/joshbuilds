import 'devicon/devicon.min.css';
import type { AppProps } from 'next/app';
import { MainLayout } from '../layouts/main';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}
export default MyApp;
