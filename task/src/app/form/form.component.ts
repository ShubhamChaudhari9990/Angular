import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  myForm !: FormGroup;
  editMode = false;

  constructor(
    private formBuilder: FormBuilder,
    private location: Location
  ) { }

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });

    this.myForm.disable(); // Disable the form initially
  }

  submitForm() {
    if (this.myForm.valid) {
      // Process form submission here
      console.log(this.myForm.value);
      this.editMode = false;
      this.myForm.disable(); // Disable the form after submitting
    }
    else{
      alert('not valid');
    }
  }

  cancelForm() {
    this.editMode = false;
    this.myForm.reset();
    this.myForm.disable(); // Disable the form after canceling
  }

  editForm() {
    this.editMode = true;
    this.myForm.enable(); // Enable the form for editing
  }

  goBack() {
    this.location.back();
  }

}
