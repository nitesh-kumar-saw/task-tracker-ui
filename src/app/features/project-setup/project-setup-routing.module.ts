import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProjectComponent } from './create-project/create-project.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { EditProjectComponent } from './edit-project/edit-project.component';

const routes: Routes = [
  {
    path: 'create',
    component: CreateProjectComponent,
  },
  {
    path: 'edit/:id',
    component: EditProjectComponent,
  },
  {
    path: 'projects',
    component:ProjectListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectSetupRoutingModule {}
