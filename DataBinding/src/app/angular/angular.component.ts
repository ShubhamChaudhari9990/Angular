import { Component } from '@angular/core';
import { EnrollService } from '../services/enroll.service';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css'],
  // providers: [EnrollService]
})
export class AngularComponent {

  constructor(private enrollService: EnrollService){}

  title = 'Angular';
  onEnroll(){
    this.enrollService.onEnrollClick(this.title);
  }

}
