import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProjectSetupService } from '../../../core/services/project-setup.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Project } from '../../../models/project.model';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrl: './edit-project.component.css',
})
export class EditProjectComponent {
  isLoading = false;
  projectForm!: FormGroup;
  project: Project | null = null;

  constructor(
    private _fb: FormBuilder,
    private _projectService: ProjectSetupService,
    private _router: Router,
    private _toastr: ToastrService,
    private _route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.projectForm = this._fb.group({
      id: [],
      name: [''],
      description: [''],
      start_date: [],
      end_date: [],
      is_project_done: [],
      owner: [''],
    });

    const projectId = Number(this._route.snapshot.paramMap.get('id'));

    this._projectService.getProject(projectId).subscribe({
      next: (project) => {
        this.project = project;
        console.log(this.project);
        this.projectForm.patchValue({
          id: project.id,
          name: project.name,
          description: project.description,
          status: project.is_project_done,
          start_date: project.start_date,
          end_date: project.end_date,
          owner: project.owner,
        });
        this.delay();
      },
      error: (err) => console.error('Error fetching tasks', err),
    });
  }

onSubmit(){
    if (this.projectForm.valid) {
      this._projectService.editProject(this.projectForm.value).subscribe({
        next: () => {
          this.projectForm.reset();
          this._toastr.success('Project updated successfully!', 'Success');
          
         this._router.navigate(['/project-setup/projects']);
        },
        error: (err) =>
          this._toastr.error(
            'Something went wrong while creating project',
            'Error'
          ),
      });
    }
  }

  delay() {
    setTimeout(() => {
      this.isLoading = false;
    }, 200);
  }
}
