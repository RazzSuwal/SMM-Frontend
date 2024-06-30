import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { PageHeaderComponent } from './componet/page-header/page-header.component';
import { PageFooterComponent } from './componet/page-footer/page-footer.component';
import { PageSideNavComponent } from './componet/page-side-nav/page-side-nav.component';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './componet/page-not-found/page-not-found.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    PageHeaderComponent,
    PageFooterComponent,
    PageSideNavComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule, HttpClientModule, MaterialModule, RouterModule, ReactiveFormsModule
  ],
  exports: [
    CommonModule, 
    MaterialModule, 
    PageHeaderComponent, 
    PageFooterComponent,
    PageSideNavComponent,
    RouterModule,
    PageNotFoundComponent,
    ReactiveFormsModule
  ],
})
export class SharedModule { }
