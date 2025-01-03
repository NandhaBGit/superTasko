import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MaterialModule } from '../material.module';

@Component({
  selector: 'super-error',
  imports: [CommonModule, MaterialModule],
  templateUrl: './super-error.component.html',
  styleUrl: './super-error.component.scss'
})
export class SuperErrorComponent {

  @Input() superErrorMsg: string = 'Required';
  @Input() superErrorMsgIcon: string = 'info';
  @Input() superErrorMsgIconShow: boolean = true;


}
