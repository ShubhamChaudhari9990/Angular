import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit{

  reactiveForm : FormGroup;

  ngOnInit() {
      this.reactiveForm = new FormGroup({
        firstname: new FormControl(null),
        lastname: new FormControl(null),
        email: new FormControl(null)
      });
  }

  onSubmit(){
    console.log(this.reactiveForm);
  }

}
