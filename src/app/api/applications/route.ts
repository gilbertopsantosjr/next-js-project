import { Job } from '@/model/application'

export async function GET() {
  const res = await fetch(`${process.env.JSON_SERVER_URL}/applications`)
  const jobs: Job[] = await res.json()
  return new Response(JSON.stringify(jobs), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
