import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../../../core/services/task.service';
import { Task, TaskPriority, TaskStatus } from '../../../models/task.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrl: './edit-task.component.css',
})
export class EditTaskComponent implements OnInit {
  task: Task | null = null;
  taskForm!: FormGroup;
  priorities = Object.values(TaskPriority);
  statuses = Object.values(TaskStatus);
  isLoading:boolean = false;
  
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private _taskService: TaskService,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.taskForm = this.fb.group({
      id: [],
      title: [''],
      description: [''],
      status: ['Pending'],
      priority: ['Medium'],
      deadline: [new Date()]
    });

    const taskId = Number(this.route.snapshot.paramMap.get('id'));

    this._taskService.getTask(taskId).subscribe({
      next: (task) => {
        this.task = task;
        console.log(this.task)
        this.taskForm.patchValue({
          id: task.id,
          title: task.title,
          description: task.description,
          status: task.status,
          priority: task.priority,
          deadline:task.deadline
        });
        this.delay();
              },
      error: (err) => console.error('Error fetching tasks', err),
    });
  }
  onSubmit(){
     if (this.taskForm.valid) {
      this._taskService.editTask(this.taskForm.value).subscribe({
        next: () => {
          this.toastr.success('Task updated successfully!', 'Success');
          this.taskForm.reset();
          this.router.navigate(['/tasks'])
        },
        error: (err) => console.error('Error:', err),
      });
  }
}

delay(){
  setTimeout(()=>{
    this.isLoading = false
  },200)
}

}
