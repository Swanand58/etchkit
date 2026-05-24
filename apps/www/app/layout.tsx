import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { SiteHeader } from '@/components/site-header'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'etchkit — No shadows. No softness. Just structure.',
  description: 'A copy-paste UI component library built on Radix UI and Tailwind CSS. Square edges, hard borders, brutal clarity.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body className="min-h-screen bg-background font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <SiteHeader />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
