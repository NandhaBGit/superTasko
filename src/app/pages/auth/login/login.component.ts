import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as textConfiguration from '../../../../assets/branding/text-branding.json';
import { MaterialModule } from '../../../shared/material.module';
import { CommonService } from '../../../core/service/common.service';
import { FormValidationService } from '../../../core/service/form-validation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'super-login',
  imports: [CommonModule, SharedModule, MaterialModule, FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  staticText: any = (textConfiguration as any).default;

  loginForm!: FormGroup;


  constructor(
    private route: Router,
    private formbuilder: FormBuilder,
    protected _common: CommonService,
    private _formValidation: FormValidationService) { }

  ngOnInit(): void {
    this.initialDependencies();
  }

  initialDependencies() {
    this.createFormControls();
  }

  createFormControls() {
    this.loginForm = this.formbuilder.group({
      username: ['', [this._formValidation.requiredValidationCheck('Username')]],
      passsword: ['', [this._formValidation.requiredValidationCheck('Password')]]
    })
  }

  submit() {
    this.route.navigate(['page/dashboard'])
  }

}
