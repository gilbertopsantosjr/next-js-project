export type JobStatus = 
  | 'saved'
  | 'applied'
  | 'interviewing'
  | 'offered'
  | 'rejected'
  | 'accepted';

export type Category = {
  id: string;
  name: string;
  color: string;
};

export type JobApplication = {
  id: string;
  title: string;
  company: string;
  location: string;
  linkedInUrl?: string;
  description?: string;
  salary?: string;
  status: JobStatus;
  categories: string[];
  notes?: string;
  dateAdded: string;
  dateModified: string;
  lastActivityDate?: string;
  interviewQuestions?: InterviewQuestion[];
};

export type SavedItem = {
  id: string;
  title: string;
  url: string;
  type: 'post' | 'article' | 'job';
  categories: string[];
  notes?: string;
  dateAdded: string;
  dateModified: string;
};

export type InterviewQuestion = {
  id: string;
  question: string;
  context?: string;
  company: string;
  date: string;
  aiSuggestions?: string[];
  actualAnswer?: string;
  feedback?: string;
};