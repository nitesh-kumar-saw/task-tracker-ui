import { Employee } from "./employee.model";


export interface EmployeeProject extends Employee {
    project_name?:string
}