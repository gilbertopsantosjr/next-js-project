export type JobStatus = 
  | 'saved'
  | 'applied'
  | 'interviewing'
  | 'offered'
  | 'rejected'
  | 'accepted';

// Manually create an array of JobStatus values
export const jobStatuses: JobStatus[] = [
  "saved",
  "applied",
  "interviewing",
  "offered",
  "rejected",
  "accepted",
];

export type Category = {
  id: string;
  name: string;
  color: string;
};

export type Company = {
  name: string;
  logo?: string;
  interviewQuestions?: []
}

export type JobApplication = {
  id: string;
  title: string;
  company: Company;
  location: string;
  linkedInUrl?: string;
  description?: string;
  salary?: string;
  status: JobStatus;
  notes?: string;
  createAt: Date;
  updateAt: Date;
  lastActivityDate?: Date;
  interviewQuestions?: InterviewQuestion[];
};

export type SavedItem = {
  id: string;
  title: string;
  url: string;
  type: 'post' | 'article' | 'job';
  categories: string[];
  notes?: string;
  createAt: Date;
  updateAt: Date;
};

export type InterviewQuestion = {
  id: string;
  question: string;
  context?: string;
  company: string;
  date: Date;
  aiSuggestions?: string[];
  actualAnswer?: string;
  feedback?: [];
};