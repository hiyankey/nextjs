import './styles/globals.css'
import { globalStyles, getCssText } from '../stitches.config'
import Header from './ui/header'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  globalStyles()
  return (
    <html lang='en'>
      <head>
        <style dangerouslySetInnerHTML={{ __html: getCssText() }} />
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
