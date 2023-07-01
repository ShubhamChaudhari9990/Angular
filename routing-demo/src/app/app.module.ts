import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainmenuComponent } from './pages/mainmenu/mainmenu.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';

@NgModule({
  declarations: [
    AppComponent,
    MainmenuComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
