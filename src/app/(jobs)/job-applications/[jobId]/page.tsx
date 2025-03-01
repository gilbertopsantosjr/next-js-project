import { notFound } from 'next/navigation'

type Props = {
  params: Promise<{ applicationId: string }>
}

export default async function JobApplicationDetailPage({ params }: Props) {
  const applicationId = (await params).applicationId
  if (!applicationId) return notFound()
  return <div>job application by id</div>
}
