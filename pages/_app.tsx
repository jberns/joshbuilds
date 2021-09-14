import 'devicon/devicon.min.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '../components/themeContext';
import { MainLayout } from '../layouts/main';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ThemeProvider>
  );
}
export default MyApp;
