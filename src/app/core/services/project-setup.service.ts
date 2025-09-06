import { Injectable } from '@angular/core';
import { CommonService } from './common.service';
import { HttpClient } from '@angular/common/http';
import { Project } from '../../models/project.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjectSetupService {
  constructor(
    private _commonService: CommonService,
    private _http: HttpClient
  ) {}

  apiUrl = this._commonService.apiUrl + '/projects';

  createProject(project: Project): Observable<Project> {
    return this._http.post<Project>(`${this.apiUrl}/create`, project);
  }

  getProject(projectId: number): Observable<Project> {
    return this._http.get<Project>(`${this.apiUrl}/${projectId}`);
  }

  getProjects(): Observable<Project[]> {
    return this._http.get<Project[]>(this.apiUrl);
  }

  editProject(project: Project): Observable<Project> {
    return this._http.put<Project>(`${this.apiUrl}/${project.id}`, project);
  }
}
