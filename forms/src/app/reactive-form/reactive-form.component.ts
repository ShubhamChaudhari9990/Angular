import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {

  userName: any;
  formData: any;
  ngOnInit() {
    this.formData = new FormGroup({
      userName : new FormControl("Reactive")
    });
  }

}
