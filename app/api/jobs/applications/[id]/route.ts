import { JobApplication } from '@/app/types'

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  const res = await fetch(`${process.env.JSON_SERVER_URL}/applications/${id}`)
  const jobs: JobApplication[] = await res.json()
  return Response.json(jobs, {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
