export interface User {
  id: number;
  name: string;
  email: string;
  role: string; // Role of the user (e.g., Developer, QA Engineer)
  profilePicture: string; // URL for the user's profile picture
  createdAt: string; // ISO date string format
  updatedAt: string; // ISO date string format
  tasksAssigned: number[]; // Array of task IDs assigned to the user
}
