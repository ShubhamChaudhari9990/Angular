import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DribbleComponent } from './dribble/dribble.component';

const routes: Routes = [
  { path : '' , redirectTo : 'dribble', pathMatch : 'full'},
  { path : 'dribble', component : DribbleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
