import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SuperErrorComponent } from '../super-error/super-error.component';
import { MaterialModule } from '../material.module';

@Component({
  selector: 'super-select',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, SuperErrorComponent,MaterialModule],
  templateUrl: './super-select.component.html',
  styleUrl: './super-select.component.scss'
})
export class SuperSelectComponent {

  @Input() superSelectLabel: string = '';
  @Input() superSelectLabelShow: boolean = true;
  @Input() superSelectData: any[] = [];
  @Input() superSelectFormControlName: string = '';
  @Input() superSelectFormGroup!: FormGroup;
  @Input() superSelectAppearance: any = 'outline';
  @Input() superSelectErrorShow: boolean = true
  @Input() superSelectErrorText: string = '';

}
