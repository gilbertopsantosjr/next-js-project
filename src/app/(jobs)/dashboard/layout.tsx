/* template will force lose the state of components ensure reset values */
export default async function DashboardTemplate({
  children,
  feedbacks,
  applications,
  interviews,
  savedItems
}: {
  children: React.ReactNode
  feedbacks: React.ReactNode
  applications: React.ReactNode
  interviews: React.ReactNode
  savedItems: React.ReactNode
}) {
  return (
    <>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {children}
        {applications}
        {feedbacks}
        {interviews}
        {savedItems}
      </div>
    </>
  )
}
