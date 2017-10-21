import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Injectable()
export class ValidationService {

  constructor() { }

  	nicValidator(control: FormControl): { [key: string]: any } {
	    var nicRegexp = /[0-9]{9}[vV]/;
	    if (control.value && !nicRegexp.test(control.value)) {
	      return { invalidNic: true };
	    }
	}

    emailValidator(control: FormControl): { [key: string]: any } {
	    var emailRegexp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
	    if (control.value && !emailRegexp.test(control.value)) {
	      return { invalidEmail: true };
	    }
	}

    phoneValidator(control: FormControl): { [key: string]: any } {
	    var phoneRegexp = /^\d{9}$/;
	    if (control.value && !phoneRegexp.test(control.value)) {
	      return { invalidPhone: true };
	    }
	}

	salaryValidator(control: FormControl): { [key: string]: any } {
	    var salaryRegexp = /^[1-9]\d*$/;
	    if (control.value && !salaryRegexp.test(control.value)) {
	      return { invalidSalary: true };
	    }
	}

	leaveValidator(control: FormControl): { [key: string]: any } {
	    // var phoneRegexp = /^[1-9][0-9]*$/;
	    var leaveRegexp = /^[1-9]\d*$/;
	    if (control.value && !leaveRegexp.test(control.value)) {
	      return { invalidLeave: true };
	    }
	}

	dateValidator(control: FormControl): { [key: string]: any } {
	    let selectedDate = new Date(control.value);
	    let currentDate = new Date();
	    
	    if (selectedDate.getFullYear() > currentDate.getFullYear()) {
	      
	      	return { invalidDate: true };
	    }else if(selectedDate.getFullYear() == currentDate.getFullYear() &&
	      	selectedDate.getMonth() > currentDate.getMonth()) {
	    	
	    	return { invalidDate: true };
	    }else if(selectedDate.getFullYear() == currentDate.getFullYear() &&
	      	selectedDate.getMonth() == currentDate.getMonth() &&
	       	selectedDate.getDate() >= currentDate.getDate()) {
	    	
	    	return { invalidDate: true };
	    }
	}

	currentDateValidator(control: FormControl): { [key: string]: any } {
	    let selectedDate = new Date(control.value);
	    let currentDate = new Date();
	    if (selectedDate > currentDate) {
	      return { invalidCurrentDate: true };
	    }
	}

	leaves4thDateValidator(control: FormControl): { [key: string]: any } {
	    let selectedDate = new Date(control.value);
	    let currentDate = new Date();
	    
	    // 4th day of maxDate = currentDate + 4Days 
	    currentDate.setDate(currentDate.getDate() + 4);
	    
	    if (selectedDate > currentDate) {
	      	return { invalidLeave4thDate: true };
	    }
	}
}