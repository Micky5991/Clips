import './globals.css'
import { Inter } from 'next/font/google'
import Navigation from "@/app/navigation.js";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: process.env.NEXT_PUBLIC_PAGE_NAME,
  description: 'Watch clips uploaded by users',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <div className={"container mx-auto px-4"}>
              <Navigation />

              {children}
          </div>
      </body>
    </html>
  )
}
