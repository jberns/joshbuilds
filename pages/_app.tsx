import 'devicon/devicon.min.css';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import { GlobalStyles } from 'twin.macro';
import { MainLayout } from '../layouts/main';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider attribute="class">
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </ThemeProvider>
    </>
  );
}
export default MyApp;
