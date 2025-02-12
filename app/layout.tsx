import { Inter } from "next/font/google"
import "./globals.css"
import type { Metadata } from "next"
import type React from "react"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Neel Patel",
  description: "Finance & Tech Innovator",
  icons: {
    icon: "/n-logo.png",
  },
  metadataBase: new URL("https://your-domain.com"),
  other: {
    "msapplication-TileColor": "#000000",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "Neel Patel",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
      </head>
      <body className={inter.className}>
        {children}
        <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />
        <Script id="calendly-widget" strategy="lazyOnload">
          {`
            window.onload = function() { 
              Calendly.initBadgeWidget({ 
                url: 'https://calendly.com/meetseichoagency/new-meeting', 
                text: 'Book Meeting', 
                color: '#0069ff', 
                textColor: '#ffffff' 
              }); 
            }
          `}
        </Script>
      </body>
    </html>
  )
}

