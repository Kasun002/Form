import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Injectable()
export class ValidationService {

  constructor() { }

    emailValidator(control: FormControl): { [key: string]: any } {
    var emailRegexp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    if (control.value && !emailRegexp.test(control.value)) {
      return { invalidEmail: true };
    }
  }

}
