import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from '../../models/task.model';
import { HttpClient } from '@angular/common/http';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root',
})
export class TaskService {

  constructor(private _http: HttpClient, private _commonService:CommonService) {}

   private apiUrl = this._commonService.apiUrl + '/tasks';

  getTask(taskId: number): Observable<Task> {
    return this._http.get<Task>(`${this.apiUrl}/${taskId}`);
  }

  getTasks(): Observable<Task[]> {
    return this._http.get<Task[]>(this.apiUrl);
  }

  createTask(task: Task): Observable<Task> {
    return this._http.post<Task>(this.apiUrl, task);
  }

  editTask(task: Task): Observable<Task> {
    return this._http.put<Task>(`${this.apiUrl}/${task.id}`, task);
  }

  deleteTask(taskId: number): Observable<any> {
    return this._http.delete(`${this.apiUrl}/${taskId}`);
  }
}
