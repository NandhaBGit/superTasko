import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MaterialModule } from '../material.module';
import { CommonModule } from '@angular/common';
import { ButtonType } from '../../core/utils/constant';

@Component({
  selector: 'super-button',
  imports: [CommonModule, MaterialModule],
  templateUrl: './super-button.component.html',
  styleUrl: './super-button.component.scss'
})
export class SuperButtonComponent {


  buttonTypeProps = ButtonType;

  @Input() superButtonLabel: string = 'superTasko';
  @Input() superButtonType: string = this.buttonTypeProps.FLAT;
  @Input() superButtonIcon: string = 'favorite';
  @Input() superButtonCustomClass: string = '';
  @Input() superButtonDisabled: boolean = false;
  @Output() superButtonEvent = new EventEmitter<boolean>();




  superButtonAction() {
    this.superButtonEvent.emit()
  }
}
