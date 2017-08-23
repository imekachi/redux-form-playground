import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  render() {
    const sheet     = new ServerStyleSheet()
    const main      = sheet.collectStyles(<Main/>)
    const styleTags = sheet.getStyleElement()
    return (
      <html>
      <Head>
        <link rel="stylesheet"
              href="https://www0.dek-d.com/assets/vendor/dekd-foundation/css/dekd-foundation.min.css"/>
        <title>My page</title>
        {styleTags}
      </Head>
      <body>
        <div id='root'>
          {main}
        </div>
        <NextScript/>
      </body>
      </html>
    )
  }
}