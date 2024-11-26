import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sagar Deware - Portfolio',
  description: 'Personal portfolio showcasing my work and experience',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="color-scheme" content="dark" />
        <meta name="grammarly" content="off" />
      </head>
      <body className={`${inter.className} antialiased`} suppressHydrationWarning>
        <main className="min-h-screen bg-[#0A0A0A] overflow-x-hidden">
          <div className="max-w-[2000px] mx-auto">
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}
