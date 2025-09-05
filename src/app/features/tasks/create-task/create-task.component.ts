import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TaskPriority, TaskStatus } from '../../../models/task.model';
import { TaskService } from '../../../core/services/task.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.css',
})
export class CreateTaskComponent {
  taskForm!: FormGroup;
  priorities = Object.values(TaskPriority);
  statuses = Object.values(TaskStatus);
  isLoading = false;

  constructor(
    private _fb: FormBuilder,
    private _taskService: TaskService,
    private _router: Router,
    private _toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.taskForm = this._fb.group({
      title: [''],
      description: [''],
      status: ['New'],
      priority: ['Low'],
      deadline:[]
    });
  }

  onSubmit() {
    this.isLoading = true;
    if (this.taskForm.valid) {
      this._taskService.createTask(this.taskForm.value).subscribe({
        next: () => {
          this.taskForm.reset();
          this._toastr.success('Task created successfully!', 'Success');
          this._router.navigate(['/tasks']);
        },
        error: (err) =>
          this._toastr.error(
            'Something went wrong while deleting task',
            'Error'
          ),
      });
    }
  }

  delay(){
    setTimeout(()=>{
      this.isLoading = false;
    },200)
  }
}
