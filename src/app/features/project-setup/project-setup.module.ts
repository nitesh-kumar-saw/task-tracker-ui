import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectSetupRoutingModule } from './project-setup-routing.module';
import { ProjectListComponent } from './project-list/project-list.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { EditProjectComponent } from './edit-project/edit-project.component';


@NgModule({
  declarations: [
    CreateProjectComponent,
    ProjectListComponent,
    EditProjectComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    ProjectSetupRoutingModule
  ]
})
export class ProjectSetupModule { }
