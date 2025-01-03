import { Component } from '@angular/core';
import * as textConfiguration from '../../../../assets/branding/text-branding.json';
import { FormGroup, FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonService } from '../../../core/service/common.service';
import { FormValidationService } from '../../../core/service/form-validation.service';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../shared/material.module';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'super-register',
  imports: [CommonModule, SharedModule, MaterialModule, FormsModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  staticText: any = (textConfiguration as any).default;

  registerForm!: FormGroup;


  constructor(private formbuilder: FormBuilder, protected _common: CommonService, private _formValidation: FormValidationService) { }

  ngOnInit(): void {
    this.initialDependencies();
  }

  initialDependencies() {
    this.createFormControls();
  }

  createFormControls() {
    this.registerForm = this.formbuilder.group({
      username: ['', [this._formValidation.requiredValidationCheck('Username')]],
      password: ['', [this._formValidation.requiredValidationCheck('Password')]],
      confirm_password: ['', [this._formValidation.requiredValidationCheck('Confirm Password')]]
    },
      { validators: this._formValidation.confirmPasswordValidationCheck('password', 'confirm_password') })
  }

  submit() {
    this.registerForm.markAllAsTouched();
  }
}
