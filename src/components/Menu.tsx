'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { name: 'Dashboard', href: '/dashboard' },
  { name: 'Saved Items', href: '/saved-items' },
  { name: 'Interview Questions', href: '/interview-questions' },
  { name: 'Job Applications', href: '/job-applications' }
]

export default function Menu() {
  const pathname = usePathname()
  return (
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
  )
}
