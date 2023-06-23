import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {

  myForm: FormGroup;
  originalFormValue: any;
  editMode: boolean = false;
  isEditMode: boolean = false;
  constructor(private formBuilder: FormBuilder, private route: Router ) {
    this.myForm = this.formBuilder.group({
      firstName: ['test', [Validators.required, Validators.minLength(3), Validators.pattern('^[a-zA-Z]+$')]],
      middleName: ['test'],
      surname: ['test', [Validators.required, Validators.minLength(3), Validators.pattern('^[a-zA-Z]+$')]],
      mobileNumber: [
        '9999999999',
        [Validators.required, Validators.pattern('^[6-9]\\d{9}$'),Validators.maxLength(10)],
      ],
      email: ['test@mail.com', [Validators.required, Validators.email]],
      backupEmail: ['test@mail.com', [Validators.required, Validators.email]],
      aadharno: ['123456789012'],
    });
    this.originalFormValue = this.myForm.value;
    this.myForm.disable();
  }

  ngOnInit() {

  }

  isInvalidAndTouched(fieldName: string) {
    const field = this.myForm.get(fieldName);
    return field ? field.invalid && field.touched : false;
  }

  isValidAndTouched(fieldName: string) {
    const field = this.myForm.get(fieldName);
    return field ? field.valid && field.touched : false;
  }

  markAsUntouched(fieldName: string) {
    const field = this.myForm.get(fieldName);
    if (field) {
      field.markAsUntouched();
    }
  }

  editForm() {
    this.editMode = true;
    this.myForm.enable();
  }

  submitForm() {
    if (this.myForm.valid) {
      console.log(this.myForm.value);
      // this.toaster.success('Data Updated Successfully')
      this.editMode = false;
      this.myForm.disable();
    } else {
      // this.toaster.error('Please fill all the * records')
    }
  }

  cancelForm() {
    this.editMode = false;
    this.myForm.reset();
    this.myForm.patchValue(this.originalFormValue);
    this.myForm.disable();
  }
  backForm() {
    this.route.navigate(['/dashboard']);
  }

  blockExtraDigits(event: any) {
    const input = event.target as HTMLInputElement;
    const trimmedValue = input.value.substr(0, 10);
    const mobileNumberControl = this.myForm.get('mobileNumber');
    if (mobileNumberControl) {
      mobileNumberControl.setValue(trimmedValue);
    }
  }

  blockExtraAadharDigit(event: any) {
    const input = event.target as HTMLInputElement;
    const trimmedValue = input.value.substr(0, 12);
    const mobileNumberControl = this.myForm.get('aadharno');
    if (mobileNumberControl) {
      mobileNumberControl.setValue(trimmedValue);
    }
  }

  onKeyPress(event: KeyboardEvent) {
    // Prevent number keys (0-9) from being entered
    if (event.key >= '0' && event.key <= '9' || event.key.match(/[!@#$%^&*(),.?":{}|<>]/)) {
      event.preventDefault();
    }
  }

  onKeyPressOnlyNumbers(event: KeyboardEvent) {

    if (event.key.match(/[!@#$%^&*(),.?":{}|<>]/)) {
      event.preventDefault();
    }
  }

  onKeyDown(event: KeyboardEvent) {
    const keyCode = event.keyCode || event.which;

    // Allow only numeric keys (0-9) and specific key codes (e.g., backspace, delete, arrow keys)
    const allowedKeys = [8, 9, 13, 16, 17, 18, 20, 37, 38, 39, 40, 46];
    const isNumericKey = (keyCode >= 48 && keyCode <= 57) || (keyCode >= 96 && keyCode <= 105);

    if (!isNumericKey && !allowedKeys.includes(keyCode)) {
      event.preventDefault();
    }
  }

}
