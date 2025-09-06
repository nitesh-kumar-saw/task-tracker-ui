import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(private router:Router){}  
  
  goToCreateTask(){
    this.router.navigate(['/tasks/create'])
  }

  goToTasks(){
    this.router.navigate(['/tasks'])
  }

  goToDashboard():void{
    this.router.navigate(['/dashboard'])
  }

   goToEmployee():void{
    this.router.navigate(['/employees'])
  }

  goToCreateProject():void{
    this.router.navigate(['/project-setup/create'])
  }

  goToProjects():void{
    this.router.navigate(['/project-setup/projects'])
  }

}
