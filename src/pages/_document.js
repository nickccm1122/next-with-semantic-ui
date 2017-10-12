/**
 * Custom Documents
 * refer to https://github.com/zeit/next.js/#custom-document
 */

import Document, { Head, Main, NextScript } from 'next/document'

import customStylesheet from '../index.css'
import semanticStylesheet from '../semantic/dist/semantic.min.css'

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const { html, head, errorHtml, chunks } = renderPage()
    return { html, head, errorHtml, chunks }
  }

  render () {
    return (
      <html>
        <Head>
          <style dangerouslySetInnerHTML={{ __html: customStylesheet }} />
          <style dangerouslySetInnerHTML={{ __html: semanticStylesheet }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
