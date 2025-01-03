import { CommonModule, DatePipe } from '@angular/common';
import { Component, EventEmitter, Inject, inject, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../../shared/material.module';
import { SharedModule } from '../../../shared/shared.module';
import * as textConfiguration from '../../../../assets/branding/text-branding.json';
import { ButtonType, FailderSuccessMessages, superToaster } from '../../../core/utils/constant';
import { FormValidationService } from '../../../core/service/form-validation.service';
import { DialogRef } from '@angular/cdk/dialog';
import { SuperToasterService } from '../../../shared/services/super-toaster.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProjectData } from '../../../data/interface/project';
import { CommonService } from '../../../core/service/common.service';

@Component({
  selector: 'app-project-add-edit',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MaterialModule, SharedModule],
  templateUrl: './project-add-edit.component.html',
  styleUrl: './project-add-edit.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class ProjectAddEditComponent implements OnInit {

  staticText: any = (textConfiguration as any).default;

  projectFormGroup!: FormGroup;

  buttonTypeProps = ButtonType;

  @Output() projectAddEvent = new EventEmitter();
  @Output() projectEditEvent = new EventEmitter();

  dialogRef = inject<DialogRef<string>>(DialogRef<string>);

  projectFormData = inject(MAT_DIALOG_DATA);


  constructor(
    private _common: CommonService,
    private formBuilder: FormBuilder,
    private _toaster: SuperToasterService,
    private _formValidation: FormValidationService,
    private _projectDailogRef: MatDialogRef<ProjectAddEditComponent>,
  ) { }

  ngOnInit(): void {
    this.initialDependencies();
  }

  initialDependencies() {
    this.createProjectForm();
    this.projectPatchForm();
  }

  projectPatchForm() {
    if (!!this.projectFormData.formData) {
      this.projectFormGroup.patchValue({
        title: this.projectFormData.formData.title,
        description: this.projectFormData.formData.description,
        priority: this.projectFormData.formData.priority,
        due_Date: this._common.transformData(this.projectFormData.formData.due_Date) || '',
        status: this.staticText.layout?.project?.add_edit?.status.find((val: any) => val.value === this.projectFormData.formData.status).value
      })
    }
  }

  createProjectForm() {
    this.projectFormGroup = this.formBuilder.group({
      title: ['', [this._formValidation.requiredValidationCheck('Title')]],
      description: ['', this._formValidation.requiredValidationCheck('Description')],
      priority: ['', [this._formValidation.requiredValidationCheck('Priority')]],
      due_Date: ['', [this._formValidation.requiredValidationCheck('Due Date')]],
      status: ['', [this._formValidation.requiredValidationCheck('status')]]
    })
  }

  submitForm() {
    this.projectFormGroup.markAllAsTouched();
    if (this.projectFormGroup.valid) {
      this.dialogRef.close()
      if (this.projectFormData?.projectEdit) {
        this.projectEditEvent.emit(this.projectFormGroup.value)
      } else {
        this.projectAddEvent.emit(this.projectFormGroup.value)
      }
    } else {
      return;
    }
  }

}
