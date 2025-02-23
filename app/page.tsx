"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Briefcase, BookmarkCheck, PieChart, MessageSquare } from "lucide-react";
import JobList from "@/components/JobList";
import SavedItems from "@/components/SavedItems";
import Dashboard from "@/components/Dashboard";
import InterviewQuestions from "@/components/InterviewQuestions";

export default function Home() {
  return (
    <div className="container mx-auto py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-4xl font-bold">Career Tracker</h1>
        <Button>
          <Briefcase className="mr-2 h-4 w-4" />
          Add Job Application
        </Button>
      </div>

      <Tabs defaultValue="dashboard" className="space-y-4">
        <TabsList>
          <TabsTrigger value="dashboard">
            <PieChart className="mr-2 h-4 w-4" />
            Dashboard
          </TabsTrigger>
          <TabsTrigger value="applications">
            <Briefcase className="mr-2 h-4 w-4" />
            Applications
          </TabsTrigger>
          <TabsTrigger value="saved">
            <BookmarkCheck className="mr-2 h-4 w-4" />
            Saved Items
          </TabsTrigger>
          <TabsTrigger value="questions">
            <MessageSquare className="mr-2 h-4 w-4" />
            Interview Questions
          </TabsTrigger>
        </TabsList>

        <TabsContent value="dashboard" className="space-y-4">
          <Dashboard />
        </TabsContent>

        <TabsContent value="applications" className="space-y-4">
          <JobList />
        </TabsContent>

        <TabsContent value="saved" className="space-y-4">
          <SavedItems />
        </TabsContent>

        <TabsContent value="questions" className="space-y-4">
          <InterviewQuestions />
        </TabsContent>
      </Tabs>
    </div>
  );
}