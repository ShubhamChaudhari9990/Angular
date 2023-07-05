import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainmenuComponent } from './mainmenu/mainmenu.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { QueryParamComponent } from './query-param/query-param.component';

const routes: Routes = [
  { path: '', component: MainmenuComponent },
  { path: 'query', component: QueryParamComponent },
  { path: '**', component: PagenotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
