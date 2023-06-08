import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Environment } from './environment';
import {AngularFireModule} from "@angular/fire/compat"
import {AngularFirestoreModule} from "@angular/fire/compat/firestore";
import { AddStudentComponent } from './add-student/add-student.component'
@NgModule({
  declarations: [
    AppComponent,
    AddStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(Environment.firebaseConfig),
    AngularFirestoreModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
