import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/** Connection string */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          {/** Roboto font */}
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="bg-[#0D1116]">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
