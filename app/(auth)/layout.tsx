import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Career Tracker',
  description: 'Track and manage your job applications and LinkedIn saved items'
}

export default function AuthRootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <div className="container mx-auto py-8">
          <header>
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-4xl font-bold">Auth</h1>
            </div>
          </header>
          <main>{children}</main>
          <footer>copyright 2021 Gilberto Santos</footer>
        </div>
      </body>
    </html>
  )
}
