import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatButtonModule, MatToolbarModule } from '@angular/material';
import { SidenavComponent } from './components/sidenav/sidenav.component';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule
  ],
  declarations: [NavbarComponent, SidenavComponent],
  exports: [NavbarComponent]
})
export class SharedModule {
}
