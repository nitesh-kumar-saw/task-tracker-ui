import { NgModule } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoaderComponent } from './components/loader/loader.component';
import { CommonModule } from '@angular/common';
import { ProjectNamesPipe } from './transformer/projectNamesPipe';

@NgModule({
  declarations: [NavbarComponent, LoaderComponent,ProjectNamesPipe],
  imports: [CommonModule],
  exports: [NavbarComponent, LoaderComponent,ProjectNamesPipe],
})
export class SharedModule {}
