import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WarsFormComponent } from './wars-form/wars-form.component';
import {WarsInfoComponent} from './wars-info/wars-info.component';

const routes: Routes = [
//  {path:'search',component:WarsFormComponent},
  {path:'info/:id',component:WarsInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
