import { Injectable } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormValidationService {

  constructor() { }

  requiredValidationCheck(controlName?: string) {
    return (control: AbstractControl): any => {
      if (!control.value) {
        return { validation_msg: `${controlName} Required` }
      }
    }
  }

  confirmPasswordValidationCheck(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup): any => {
      const [control, matchControl] = [formGroup?.controls[controlName], formGroup?.controls[matchingControlName]];      
      if (matchControl?.errors && !matchControl?.errors['confirmedValidator']) {
        return;
      }
      if (control?.value !== matchControl?.value) {
        matchControl?.setErrors({ validation_msg: `Password didn't Match` });
      } else {
        matchControl?.setErrors(null);
      }
    }
  }
}
