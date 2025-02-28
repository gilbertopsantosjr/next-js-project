'use client'
import { useRouter } from 'next/navigation'
import { startTransition } from 'react'

type Props = {
  error: Error
  reset: () => void
}

export default function ErrorBoundary({ error, reset }: Props) {
  const router = useRouter()
  const reload = () => {
    startTransition(() => {
      router.refresh()
      reset()
    })
  }
  return (
    <div>
      Error in Saved Items {error.message}
      <button onClick={reload}>Reload</button>
    </div>
  )
}
