export interface Task {
  id: number;
  title: string;
  description?: string;
  status: TaskStatus;
  priority: TaskPriority;
  deadline: Date;
  employeeId: number;
  projectId:number;
}


export enum TaskStatus {  
  Defined = 'Defined',
  New = 'New',  
  InProgress = 'In Progress',
  Pending = 'Pending',
  Completed = 'Completed',
  OnHold = 'On Hold',
  Backlog = 'Backlog' 
}

export enum TaskPriority {
  Low = 'Low',
  Medium = 'Medium',
  High = 'High'
}
