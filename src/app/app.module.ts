import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TasksModule } from './features/tasks/tasks.module';
import { EmployeesModule } from './features/employees/employees.module';
import { DashboardModule } from './features/dashboard/dashboard.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ProjectSetupModule } from './features/project-setup/project-setup.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,           
    SharedModule,
    TasksModule,
    EmployeesModule,
    DashboardModule,
    ProjectSetupModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
