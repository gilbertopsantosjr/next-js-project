import { notFound } from 'next/navigation'

type Props = {
  params: Promise<{ interviewQuestionId: string }>
}

export default async function InterviewQuestionDetailPage({ params }: Props) {
  const interviewQuestionId = (await params).interviewQuestionId
  if (!interviewQuestionId) return notFound()
  return <div>interview Question by id {interviewQuestionId} </div>
}
