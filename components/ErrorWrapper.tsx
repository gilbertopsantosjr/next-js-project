'use client'
import '../app/globals.css'

interface WrapperProps {
  children: React.ReactNode
}

export const ErrorWrapper = ({ children }: WrapperProps) => {
  return (
    <div className="flex flex-col rounded-lg mt-8 relative p-4 border border-gray-300">
      {children}
    </div>
  )
}
