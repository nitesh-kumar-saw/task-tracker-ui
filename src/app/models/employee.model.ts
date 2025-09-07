import { Project } from "./project.model";
import { Task } from "./task.model";

export interface Employee{
    id:number;
    first_name:string;
    last_name:string;
    is_active:boolean;
    projects?:Project[];
    tasks?:Task[];
    created_date:Date;
}