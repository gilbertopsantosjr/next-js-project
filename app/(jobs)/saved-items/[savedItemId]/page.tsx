import { notFound } from 'next/navigation'

type Props = {
  params: Promise<{ savedItemId: string }>
}

export const generateMetadata = async ({
  savedItemId
}: {
  savedItemId: string
}) => {
  return {
    title: `Saved Item Detail ${savedItemId}`
  }
}

export default async function SavedItemDetailPage({ params }: Props) {
  const savedItemId = (await params).savedItemId
  if (!savedItemId) return notFound()
  if (savedItemId === '1') {
    throw new Error('This is a test error')
  }
  return <div>saved items by id</div>
}
