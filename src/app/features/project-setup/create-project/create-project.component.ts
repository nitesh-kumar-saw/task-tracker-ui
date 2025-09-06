import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProjectSetupService } from '../../../core/services/project-setup.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrl: './create-project.component.css',
})
export class CreateProjectComponent {
  projectForm!: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _projectService: ProjectSetupService,
    private _router:Router,
    private _toastr:ToastrService
  ) {}


  ngOnInit():void{
    this.projectForm = this._fb.group({
      name: [''],
      description: [''],
      start_date: [],
      end_date: [],
      is_project_done:[]
    });
  }

  onSubmit(){
    if (this.projectForm.valid) {
      this._projectService.createProject(this.projectForm.value).subscribe({
        next: (data) => {
          this.projectForm.reset();
          this._toastr.success('Project created successfully!', 'Success');
          console.log(data);
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

}
