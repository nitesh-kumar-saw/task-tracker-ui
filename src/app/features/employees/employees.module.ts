import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesRoutingModule } from './employees-routing.module';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { SharedModule } from '../../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CreateEmployeeComponent,
    EmployeeListComponent,
    EditEmployeeComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    EmployeesRoutingModule
  ]
})
export class EmployeesModule { }
