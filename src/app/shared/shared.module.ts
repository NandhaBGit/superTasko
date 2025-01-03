import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuperInputComponent } from './super-input/super-input.component';
import { SuperButtonComponent } from './super-button/super-button.component';
import { SuperInputDescComponent } from './super-input-desc/super-input-desc.component';
import { SuperDatePickerComponent } from './super-date-picker/super-date-picker.component';
import { SuperSelectComponent } from './super-select/super-select.component';

const Components = [
  SuperInputComponent,
  SuperSelectComponent,
  SuperButtonComponent,
  SuperInputDescComponent,
  SuperDatePickerComponent
]


@NgModule({
  imports: [
    CommonModule,
    ...Components
  ],
  exports: [...Components]
})
export class SharedModule { }
