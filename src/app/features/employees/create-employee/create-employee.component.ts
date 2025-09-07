import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeSetupService } from '../../../core/services/employee-setup.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Task } from '../../../models/task.model';
import { Project } from '../../../models/project.model';
import { TaskService } from '../../../core/services/task.service';
import { ProjectSetupService } from '../../../core/services/project-setup.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrl: './create-employee.component.css'
})
export class CreateEmployeeComponent {
  employeeForm!: FormGroup;
  tasks: Task[] | null = null;
  projects: Project[] | null = null;

  constructor(
    private _fb: FormBuilder,
    private _employeeService: EmployeeSetupService,
    private _router:Router,
    private _toastr:ToastrService,
    private _taskService:TaskService,
    private _projectService: ProjectSetupService,
  ) {}


  ngOnInit():void{
    this._taskService.getTasks().subscribe({
      next:(data)=>{
        this.tasks = data
        console.log(this.tasks)
      },
      error:(err) =>{
        this._toastr.error('Something went wrong while fetching tasks',err)
      }
    })

    this._projectService.getProjects().subscribe({
      next:(data)=>{
        this.projects = data
        console.log(this.projects)
      },
      error:(err) =>{
        this._toastr.error('Something went wrong while fetching projects',err)
      }
    })


    this.employeeForm = this._fb.group({
      first_name: [''],
      last_name: [''],
      is_active: [],
      project_id: [],
      task_id:[]
    });
  }

  onSubmit(){
    if(this.employeeForm.valid){
      this._employeeService.createEmployee(this.employeeForm.value).subscribe({
        next:(data) => {
          this._toastr.success('Employee created successfully!','Employee')
        },
        error:(err)=> this._toastr.error('Something went wrong while adding the employee','Employee')
      });
    }
  }
}
