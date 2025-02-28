import Menu from '@/components/Menu'
import { Button } from '@/components/ui/button'
import { Briefcase } from 'lucide-react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Career Tracker',
    template: `s% | Career Tracker`,
    absolute: ''
  },
  description: 'Track and manage your job applications and LinkedIn saved items'
}

export default async function JobsRootLayout({
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
              <h1 className="text-4xl font-bold">Career Tracker</h1>
              <Button>
                <Briefcase className="mr-2 h-4 w-4" />
                Add Job Application
              </Button>
            </div>
          </header>
          <Menu />
          <main>{children}</main>
          <footer>copyright 2021 Gilberto Santos</footer>
        </div>
      </body>
    </html>
  )
}
