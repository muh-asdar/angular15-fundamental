import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    RouterModule,
  ],
  exports:[
    LayoutComponent
  ]
})
export class CoreModule { }
