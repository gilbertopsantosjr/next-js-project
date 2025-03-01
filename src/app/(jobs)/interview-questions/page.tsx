'use client'

import { InterviewQuestion } from '@/app/types'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { Brain, CheckCircle2, Loader2, Plus } from 'lucide-react'
import { useState } from 'react'

type CompanyRole = {
  company: string
  role: string
  status: 'completed' | 'in_progress'
}

export default function InterviewQuestionsPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [question, setQuestion] = useState('')
  const [context, setContext] = useState('')
  const [selectedCompanyRole, setSelectedCompanyRole] = useState<string>('all')

  // This would be replaced with actual data from your backend
  const mockCompanyRoles: CompanyRole[] = [
    {
      company: 'Tech Corp',
      role: 'Senior Frontend Developer',
      status: 'completed'
    },
    {
      company: 'Startup Inc',
      role: 'Full Stack Engineer',
      status: 'in_progress'
    },
    {
      company: 'Innovation Labs',
      role: 'Software Architect',
      status: 'completed'
    }
  ]

  const mockQuestions: InterviewQuestion[] = []

  const handleAddQuestion = async () => {
    setIsLoading(true)
    // Here you would make an API call to get AI suggestions
    // For now, we'll simulate a delay
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsLoading(false)
    setQuestion('')
    setContext('')
  }

  // Filter questions based on selected company/role
  const filteredQuestions =
    selectedCompanyRole === 'all'
      ? mockQuestions
      : mockQuestions.filter((q) => q.company === selectedCompanyRole)

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Select
          value={selectedCompanyRole}
          onValueChange={setSelectedCompanyRole}
        >
          <SelectTrigger className="w-[300px]">
            <SelectValue placeholder="Filter by company and role" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Companies</SelectItem>
            {mockCompanyRoles.map((item) => (
              <SelectItem
                key={`${item.company}-${item.role}`}
                value={item.company}
              >
                <div className="flex items-center gap-2">
                  <span>
                    {item.company} - {item.role}
                  </span>
                  {item.status === 'completed' && (
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                  )}
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <Card className="bg-accent/50">
        <CardHeader>
          <CardTitle className="text-xl font-bold">
            Add New Interview Question
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Question</label>
            <Input
              placeholder="Enter the interview question..."
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Context (Optional)</label>
            <Textarea
              placeholder="Add any context about the interview or position..."
              value={context}
              onChange={(e) => setContext(e.target.value)}
            />
          </div>
          <Button
            onClick={handleAddQuestion}
            disabled={!question || isLoading}
            className="w-full"
          >
            {isLoading ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <Plus className="mr-2 h-4 w-4" />
            )}
            Get AI Suggestions
          </Button>
        </CardContent>
      </Card>

      <div className="grid gap-4">
        {filteredQuestions.map((item) => (
          <Card key={item.id} className="hover:bg-accent/50">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-xl font-bold">
                {item.question}
              </CardTitle>
              <Badge variant="outline">{item.company}</Badge>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">{item.context}</p>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Brain className="h-4 w-4 text-primary" />
                  <span className="font-medium">AI Suggested Answers:</span>
                </div>
                {item.aiSuggestions?.map((suggestion, index) => (
                  <div
                    key={index}
                    className="rounded-lg bg-accent/50 p-4 text-sm"
                  >
                    {suggestion}
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                Asked on {new Date(item.date).toLocaleDateString()}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredQuestions.length === 0 && (
        <div className="text-center py-8 text-muted-foreground">
          No interview questions found for this company
        </div>
      )}
    </div>
  )
}
