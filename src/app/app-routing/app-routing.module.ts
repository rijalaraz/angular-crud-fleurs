import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from "../app.component";
import { FleurComponent } from "../fleur/fleur.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'fleurs',
    pathMatch: 'full'
  },
  {
    path: 'fleurs',
    component: FleurComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
