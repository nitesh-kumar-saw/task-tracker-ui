import { NgModule } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoaderComponent } from './components/loader/loader.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [NavbarComponent, LoaderComponent],
  imports: [CommonModule],
  exports: [NavbarComponent, LoaderComponent],
})
export class SharedModule {}
