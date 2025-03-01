import { JobApplication } from '@/app/types'
import { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  const requestHeaders = new Headers(request.headers)
  console.log(requestHeaders.get('Authorization'))
  const searchParams = request.nextUrl.searchParams
  const query = searchParams.get('q')
  const res = await fetch(`${process.env.JSON_SERVER_URL}/applications`)
  const jobs: JobApplication[] = await res.json()
  const filteredJobs = query
    ? jobs.filter((j) => j.description?.includes(query))
    : jobs
  return Response.json(filteredJobs, {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
