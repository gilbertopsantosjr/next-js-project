'use client'

import { JobApplication, JobStatus } from '@/app/types'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { useState } from 'react'

const statusColors: Record<JobStatus, string> = {
  saved: 'bg-blue-100 text-blue-800',
  applied: 'bg-yellow-100 text-yellow-800',
  interviewing: 'bg-purple-100 text-purple-800',
  offered: 'bg-green-100 text-green-800',
  rejected: 'bg-red-100 text-red-800',
  accepted: 'bg-emerald-100 text-emerald-800'
}

export default function JobApplicationsPage() {
  const [filter, setFilter] = useState<JobStatus | 'all'>('all')
  const [search, setSearch] = useState('')

  // This would be replaced with actual data from your backend
  const mockJobs: JobApplication[] = [
    {
      id: '1',
      title: 'Senior Frontend Developer',
      company: 'Tech Corp',
      location: 'Remote',
      status: 'applied',
      categories: ['Frontend', 'Remote'],
      createAt: '2024-03-20',
      updateAt: '2024-03-20'
    },
    {
      id: '2',
      title: 'Full Stack Engineer',
      company: 'Startup Inc',
      location: 'New York, NY',
      status: 'interviewing',
      categories: ['Full Stack', 'On-site'],
      createAt: '2024-03-19',
      updateAt: '2024-03-20'
    }
  ]

  return (
    <div className="space-y-4">
      <div className="flex gap-4">
        <Input
          placeholder="Search jobs..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="max-w-sm"
        />
        <Select
          value={filter}
          onValueChange={(value) => setFilter(value as JobStatus | 'all')}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="saved">Saved</SelectItem>
            <SelectItem value="applied">Applied</SelectItem>
            <SelectItem value="interviewing">Interviewing</SelectItem>
            <SelectItem value="offered">Offered</SelectItem>
            <SelectItem value="accepted">Accepted</SelectItem>
            <SelectItem value="rejected">Rejected</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-4">
        {mockJobs.map((job) => (
          <Card key={job.id} className="hover:bg-accent/50 cursor-pointer">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-xl font-bold">{job.title}</CardTitle>
              <Badge className={statusColors[job.status]}>{job.status}</Badge>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-2">
                <p className="text-sm text-muted-foreground">
                  {job.company} • {job.location}
                </p>
                <div className="flex gap-2">
                  {job.categories.map((category) => (
                    <Badge key={category} variant="outline">
                      {category}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
