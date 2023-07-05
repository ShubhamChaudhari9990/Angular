import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { MainmenuComponent } from './mainmenu/mainmenu.component';
import { QueryParamComponent } from './query-param/query-param.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';


@NgModule({
  declarations: [
    QueryParamComponent,
    MainmenuComponent,
    PagenotfoundComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
