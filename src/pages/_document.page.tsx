import Document, {
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';
import type { DocumentContext, DocumentInitialProps } from 'next/document';

/**
 * @see {@link https://nextjs.org/docs/advanced-features/custom-document}
 */
export default class MyDocument extends Document {
  static async getInitialProps(
    context: DocumentContext,
  ): Promise<DocumentInitialProps> {
    const { locale } = context;
    const configuration = {};

    const renderPage = context.renderPage;

    context.renderPage = () =>
      renderPage({
        enhanceApp: (App) => {
          /**
           * Make configuration available to all pages through `configuration` prop.
           */
          return (props) => {
            Object.assign(
              props.pageProps,
              { configuration },
            );

            return (
              <App {...props} />
            );
          }
        },
        enhanceComponent: (Component) => Component,
      });

    const initialProps = await Document.getInitialProps(context);

    return initialProps;
  }

  render() {
    const favicon = [
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png',
        type: 'image/png',
      },
      {
        rel: 'icon',
        sizes: '32x32',
        href: '/favicon-32x32.png',
        type: 'image/png',
      },
      {
        rel: 'icon',
        sizes: '16x16',
        href: '/favicon-16x16.png',
        type: 'image/png',
      },
    ];

    return (
      <Html lang="pt-BR">
        <Head>
          {favicon.map((item) => (
            <link
              key={item.href}
              {...item}
            />
          ))}

          <meta
            name="viewport"
            content="width=device-width, initial-scale=1"
          />
          <meta charSet="utf-8" />
          <meta
            name="robots"
            content="index, follow"
          />
          <meta
            httpEquiv="content-language"
            content="pt-br"
          />

          <link rel="manifest" href="/site.webmanifest"></link>
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
