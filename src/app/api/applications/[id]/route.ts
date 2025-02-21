import { Job } from '@/model/application'
import { NextRequest } from 'next/server'

type Params = {
  id: string
}

export async function GET(
  request: NextRequest,
  { params }: { params: Params }
) {
  try {
    const res = await fetch(
      `${process.env.JSON_SERVER_URL}/applications/${params.id}`
    )
    const job: Job = await res.json()
    return new Response(JSON.stringify(job), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  } catch (error) {
    return new Response(`Application not found!`, {
      status: 404
    })
  }
}
