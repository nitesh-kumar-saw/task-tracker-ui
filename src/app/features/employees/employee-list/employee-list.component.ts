import { Component } from '@angular/core';
import { Employee } from '../../../models/employee.model';
import { EmployeeSetupService } from '../../../core/services/employee-setup.service';
import { EmployeeProject } from '../../../models/employee-project.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css',
})
export class EmployeeListComponent {
  isLoading = false;

  employees?: EmployeeProject[];

  constructor(private _employeeService: EmployeeSetupService) {}

  ngOnInit() {
    this.isLoading = true;
    this._employeeService.getEmployees().subscribe({
      next: (data) => {
        this.employees = data;
        this.delay();
      },
      error: (err) => {
        console.log('Something went wrong');
        this.isLoading = false;
      },
    });
  }

  delay() {
    setTimeout(() => {
      this.isLoading = false;
    }, 200);
  }
}
