import { Component, Input, input, ViewEncapsulation } from '@angular/core';
import { MaterialModule } from '../material.module';
import { CommonModule } from '@angular/common';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SuperErrorComponent } from '../super-error/super-error.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'super-input',
  imports: [CommonModule, MaterialModule, SuperErrorComponent, FormsModule, ReactiveFormsModule, MatIconModule],
  templateUrl: './super-input.component.html',
  styleUrl: './super-input.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class SuperInputComponent {

  @Input() superInputLabel: string = '';
  @Input() superInputLabelShow: boolean = true;
  @Input() superInputSuffixIcon: any = '';
  @Input() superInputSuffixIconShow: boolean = false;
  @Input() superInputPrefixIcon: any = '';
  @Input() superInputPrefixIconShow: boolean = false;
  @Input() superInputValue: string = '';
  @Input() superInputType: string = 'text';
  @Input() superInputPlaceholder: string = '';
  @Input() superInputFormControlName: string = '';
  @Input() superInputFormGroup!: FormGroup;
  @Input() superInputAppearance: any = 'outline';
  @Input() superInputErrorShow: boolean = true
  @Input() superInputErrorText: string = '';
  @Input() superInputSuffixIconEvent: any;


}
