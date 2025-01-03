
export interface Project {
  id?: number,
  title: string;
  description: String;
  priority: string,
  dueDate: Date,
  status: string,
  refKey?: string,
}