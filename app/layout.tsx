import { ReactNode } from "react";
import { IBM_Plex_Sans_Arabic } from "next/font/google";
import './globals.css'

const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['arabic'],
  display: 'swap',
})

export const metadata = {
  title: 'سیپان هاوس - تامی ناوازە',
  description: 'تامی تایبەت، ئەزموونێکی بێ وێنە',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="ku" className={ibmPlexSansArabic.className}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body>{children}</body>
    </html>
  )
}
