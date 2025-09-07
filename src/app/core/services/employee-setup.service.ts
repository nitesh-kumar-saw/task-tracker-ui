import { Injectable } from '@angular/core';
import { CommonService } from './common.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../../models/employee.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeeSetupService {
  constructor(
    private _commonService: CommonService,
    private _http: HttpClient
  ) {}

  apiUrl = this._commonService.apiUrl + '/employees';

  getEmployee(employeeId: number): Observable<Employee> {
    return this._http.get<Employee>(`${this.apiUrl}/${employeeId}`);
  }

  getEmployees(): Observable<Employee[]> {
    return this._http.get<Employee[]>(`${this.apiUrl}`);
  }

  createEmployee(employee: Employee): Observable<Employee> {
    return this._http.post<Employee>(`${this.apiUrl}/create`, employee);
  }
}
