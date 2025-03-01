import { notFound } from 'next/navigation'

type Props = {
  params: Promise<{ savedItemId: string }>
}

export default async function SavedItemDetailPage({ params }: Props) {
  const savedItemId = (await params).savedItemId
  if (!savedItemId) return notFound()
  if (savedItemId === '1') {
    throw new Error('This is a test error')
  }
  return <div>saved items by id</div>
}
