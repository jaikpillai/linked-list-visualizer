import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentInitialProps,
} from "next/document";

import general from "../general";

class MyDocument extends Document {
  static async getInitialProps(ctx: any): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <title>{general.app_name}</title>
          <meta name="description" content="Linked List Visualizer" />
          <meta
            name="description"
            content="A linked list is a data structure consisting of a collection of objects stored at random memory blocks,  connected together by pointers. Each object or data element called node points to the next node in the linked list."
          />
          <meta
            name="description"
            content="See different linked list operations visually."
          />
          <meta name="description" content="Jai K. Pillai" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin={"true"}
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Sora:wght@100;200;300;400;500;600;700;800&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
export default MyDocument;
