import Document, { Html, Head, Main, NextScript } from 'next/document';
import { extractCritical } from '@emotion/server';
import 'twin.macro';
import tw from 'twin.macro';
export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    const page = await ctx.renderPage();
    const styles = extractCritical(page.html);
    return { ...initialProps, ...page, ...styles };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <style
            data-emotion-css={this.props.ids.join(' ')}
            dangerouslySetInnerHTML={{ __html: this.props.css }}
          />
        </Head>
        <body
          tw="
            bg-white 
            text-white 
            dark:bg-black 
            dark:text-black
            "
        >
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
