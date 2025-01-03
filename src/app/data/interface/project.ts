export interface ProjectData {
  id?: number,
  title: string;
  description: String;
  priority: string,
  dueDate: Date,
  status: string,
  actions?: {
    edit: boolean,
    delete: boolean
  }
}