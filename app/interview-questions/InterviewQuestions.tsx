"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Brain, Plus, Loader2, CheckCircle2 } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { InterviewQuestion } from "@/app/types";

type CompanyRole = {
  company: string;
  role: string;
  status: "completed" | "in_progress";
};

export default function InterviewQuestions() {
  const [isLoading, setIsLoading] = useState(false);
  const [question, setQuestion] = useState("");
  const [context, setContext] = useState("");
  const [selectedCompanyRole, setSelectedCompanyRole] = useState<string>("all");

  // This would be replaced with actual data from your backend
  const mockCompanyRoles: CompanyRole[] = [
    {
      company: "Tech Corp",
      role: "Senior Frontend Developer",
      status: "completed",
    },
    {
      company: "Startup Inc",
      role: "Full Stack Engineer",
      status: "in_progress",
    },
    {
      company: "Innovation Labs",
      role: "Software Architect",
      status: "completed",
    },
  ];

  const mockQuestions: InterviewQuestion[] = [
    {
      id: "1",
      question: "How do you handle conflicts in a team?",
      context: "Senior Frontend Developer position at Tech Corp",
      company: "Tech Corp",
      date: "2024-03-20",
      aiSuggestions: [
        "I believe in addressing conflicts early through open communication. First, I listen to understand all perspectives. Then, I work with team members to find common ground and develop solutions that benefit the team and project.",
        "My approach involves identifying the root cause of conflicts and facilitating constructive discussions. I focus on maintaining professional relationships while working towards resolution through compromise and clear communication.",
        "I use the GROW model: Gather information about the conflict, Review possible solutions with all parties, Outline agreed-upon actions, and Watch for improvement. This structured approach helps maintain team harmony while resolving issues effectively.",
      ],
    },
    {
      id: "2",
      question: "Describe a challenging project you've worked on",
      context: "Full Stack Engineer interview at Startup Inc",
      company: "Startup Inc",
      date: "2024-03-19",
      aiSuggestions: [
        "I led a migration from a monolithic architecture to microservices, which improved system scalability by 300%. The key challenges were maintaining service continuity and managing team coordination across multiple services.",
        "I implemented a real-time collaboration feature in our document editing platform. The main challenge was handling concurrent edits and conflict resolution while maintaining a smooth user experience.",
        "I developed a high-performance data processing pipeline that reduced processing time from hours to minutes. The project required careful optimization and innovative solutions for handling large datasets efficiently.",
      ],
    },
    {
      id: "3",
      question: "How do you approach system architecture decisions?",
      context: "Software Architect position at Innovation Labs",
      company: "Innovation Labs",
      date: "2024-03-18",
      aiSuggestions: [
        "I follow a systematic approach that starts with gathering requirements, analyzing constraints, and evaluating different architectural patterns. I consider factors like scalability, maintainability, and performance while ensuring alignment with business goals.",
        "My decision-making process involves creating proof-of-concepts for critical components, conducting thorough technical evaluations, and getting feedback from stakeholders. I also consider the team's expertise and the long-term maintainability of the solution.",
        "I use the C4 model for visualizing and documenting architecture decisions, which helps in communicating the design effectively across different levels of abstraction. I also ensure that decisions are validated against quality attributes and business requirements.",
      ],
    },
  ];

  const handleAddQuestion = async () => {
    setIsLoading(true);
    // Here you would make an API call to get AI suggestions
    // For now, we'll simulate a delay
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsLoading(false);
    setQuestion("");
    setContext("");
  };

  // Filter questions based on selected company/role
  const filteredQuestions = selectedCompanyRole === "all"
    ? mockQuestions
    : mockQuestions.filter((q) => q.company === selectedCompanyRole);

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
              <SelectItem key={`${item.company}-${item.role}`} value={item.company}>
                <div className="flex items-center gap-2">
                  <span>
                    {item.company} - {item.role}
                  </span>
                  {item.status === "completed" && (
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
              <CardTitle className="text-xl font-bold">{item.question}</CardTitle>
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
  );
}