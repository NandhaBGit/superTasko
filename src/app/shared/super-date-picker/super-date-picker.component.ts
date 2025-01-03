import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, QueryList, ViewChildren } from '@angular/core';
import { SuperErrorComponent } from '../super-error/super-error.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';

@Component({
  selector: 'super-date',
  imports: [CommonModule, SuperErrorComponent, FormsModule, ReactiveFormsModule, MaterialModule],
  templateUrl: './super-date-picker.component.html',
  styleUrl: './super-date-picker.component.scss'
})
export class SuperDatePickerComponent {

  @Input() superDateLabel: string = '';
  @Input() superDateLabelShow: boolean = true;
  @Input() superDateFormControlName: string = '';
  @Input() superDateFormGroup!: FormGroup;
  @Input() superDateAppearance: any = 'outline';
  @Input() superDateErrorShow: boolean = true
  @Input() superDateErrorText: string = '';
  @Input() superDateHintText: string = 'MM/DD/YYYY';
  @Input() superDateHintTextShow: boolean = true;

  @ViewChildren('superDatePickerElement') superDatePickerElement!: QueryList<ElementRef> | any;

}
