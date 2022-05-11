import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddModalComponentComponent } from './components/add-modal-component/add-modal-component.component';
import { ProfileDetailsComponent } from './components/profile-details/profile-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/students', pathMatch: 'full' },
  {path:'students',component:AddModalComponentComponent},
  {path:'students/:id',component:ProfileDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
