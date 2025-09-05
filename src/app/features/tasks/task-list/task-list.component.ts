import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { TaskService } from '../../../core/services/task.service';
import { Task, TaskPriority } from '../../../models/task.model';
import { TaskStatus } from '../../../models/task.model';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css',
})
export class TaskListComponent {
  tasks: Task[] = [];
  TaskStatus = TaskStatus;
  TaskPriority = TaskPriority;
  editTask: Task | null = null;
  updateFlag: boolean = false;
  isLoading: boolean = false;

  constructor(
    private _taskService: TaskService,
    private _router: Router,
    private _toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks(): void {
    this.isLoading = true;
    this._taskService.getTasks().subscribe({
      next: (data) => {
        this.tasks = data;
        this.delay();
      },
      error: (err) => {
        console.error('Error fetching tasks', err);
        this.isLoading = false;
      },
    });
  }

  onEdit(task: Task): void {
    this._router.navigate(['/edit/' + task.id]);
  }

  onDelete(taskId: any) {
    var confirmation = confirm('Are you sure you want to delete this item?');
    if (confirmation) {
      this.isLoading = true;
      this._taskService.deleteTask(taskId).subscribe({
        next: (data) => {
          this._toastr.warning('Task deleted successfully!', 'Warning');
          this.delay();
          this.getTasks();
        },
        error: (err) => {
          this._toastr.error(err, 'Error');
          this.delay();
        },
      });
    }
  }

  delay() {
    setTimeout(() => {
      this.isLoading = false;
    }, 200);
  }
}
