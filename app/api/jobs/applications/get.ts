import { JobApplication } from '@/app/types'

export async function GET() {
  const res = await fetch('http://localhost:5000/applications')
  const jobs: JobApplication[] = await res.json()
  return new Response(JSON.stringify(jobs), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
