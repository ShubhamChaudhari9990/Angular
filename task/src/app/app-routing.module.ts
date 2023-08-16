import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DribbleComponent } from './dribble/dribble.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './parent/child/child.component';

const routes: Routes = [
  { path : '' , redirectTo : 'dribble', pathMatch : 'full'},
  { path : 'dribble', component : DribbleComponent},
  { path: 'parent', component: ParentComponent},
  { path: 'child', component: ChildComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
