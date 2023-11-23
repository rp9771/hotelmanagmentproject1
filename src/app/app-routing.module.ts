import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/list/list.component';
import { UpdateComponent } from './pages/update/update.component';

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: 'full' },
  {path:"home", component:HomeComponent,  pathMatch: 'full'},
  {path:"list", component:ListComponent,  pathMatch: 'full'},
  {path:"update/:id", component:UpdateComponent,  pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
