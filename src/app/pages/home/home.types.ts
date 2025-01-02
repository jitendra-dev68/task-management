export interface Task {
  id: number;
  name: string;
  description: string;
  priority: Priority; // Using the Priority enum
  status: Status; // Using the Status enum
  dueDate: string; // ISO date string format (e.g., '2025-02-10')
  assignedTo: string; // Name of the assigned user
  tags: string[]; // Array of tags or categories
  createdAt: string; // ISO date string format
  updatedAt: string; // ISO date string format
}

export enum Priority {
  High = 'High',
  Medium = 'Medium',
  Low = 'Low',
}

export enum Status {
  Pending = 'Pending',
  InProgress = 'In Progress',
  Completed = 'Completed',
  InReview = 'In Review',
}
