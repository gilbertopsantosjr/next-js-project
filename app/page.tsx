'use client'

import { Button } from '@/components/ui/button'
import { Briefcase } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { name: 'Dashboard', href: '/dashboard' },
  { name: 'Saved Items', href: '/saved-items' },
  { name: 'Interview Questions', href: '/interview-questions' },
  { name: 'Job Applications', href: '/job-applications' }
]

export default function Home() {
  const pathname = usePathname()
  return (
    <div className="container mx-auto py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-4xl font-bold">Career Tracker</h1>
        <Button>
          <Briefcase className="mr-2 h-4 w-4" />
          Add Job Application
        </Button>
      </div>
      <div className="flex">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`mr-4 text-lg ${
              pathname === link.href ? 'text-blue-600' : 'text-gray-500'
            }`}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  )
}
