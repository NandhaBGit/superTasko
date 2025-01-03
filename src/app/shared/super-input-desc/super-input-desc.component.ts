import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SuperErrorComponent } from '../super-error/super-error.component';
import { MaterialModule } from '../material.module';

@Component({
  selector: 'super-desc',
  imports: [CommonModule, SuperErrorComponent, FormsModule, ReactiveFormsModule, MaterialModule],
  templateUrl: './super-input-desc.component.html',
  styleUrl: './super-input-desc.component.scss'
})
export class SuperInputDescComponent {

  @Input() superInputDescLabel: string = '';
  @Input() superInputDescLabelShow: boolean = true;
  @Input() superInputDescPlaceholder: string = '';
  @Input() superInputDescFormControlName: string = '';
  @Input() superInputDescFormGroup!: FormGroup;
  @Input() superInputDescAppearance: any = 'outline';
  @Input() superInputDescErrorShow: boolean = true
  @Input() superInputDescErrorText: string = '';
}
