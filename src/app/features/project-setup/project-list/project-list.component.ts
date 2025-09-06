import { Component } from '@angular/core';
import { ProjectSetupService } from '../../../core/services/project-setup.service';
import { Project } from '../../../models/project.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.css'
})
export class ProjectListComponent {
  projects:Project[] | null = null;
  isLoading = false;

  constructor(private _projectService:ProjectSetupService, private _router:Router){}


  ngOnInit(){
    this.getProjects()
  }

   getProjects(): void {
    this.isLoading = true;
    this._projectService.getProjects().subscribe({
      next: (data) => {
        this.projects = data;
        this.delay();
      },
      error: (err) => {
        console.error('Error fetching tasks', err);
        this.isLoading = false;
      },
    });
  }

  onEditProject(projectId:number) :void{
    this._router.navigate(['/project-setup/edit',projectId])
  }

    delay() {
    setTimeout(() => {
      this.isLoading = false;
    }, 200);
  }
}
