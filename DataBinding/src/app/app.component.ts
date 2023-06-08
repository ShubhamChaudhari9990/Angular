import { Component, OnInit } from '@angular/core';
import { EnrollService } from './services/enroll.service';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers: [EnrollService,UserService]
})
export class AppComponent {

  title = 'DataBinding';
}
