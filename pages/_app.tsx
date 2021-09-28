import 'devicon/devicon.min.css';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import 'twin.macro';
import { GlobalStyles } from 'twin.macro';
import { MainLayout } from '../layouts/main';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider attribute="class" defaultTheme="system">
        <SimpleBar
          forceVisible="y"
          autoHide={false}
          style={{ maxHeight: '100vh' }}
        >
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        </SimpleBar>
      </ThemeProvider>
    </>
  );
}
export default MyApp;
