import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, ViewEncapsulation } from '@angular/core';
import { MaterialModule } from '../../shared/material.module';
import { MatDialog } from '@angular/material/dialog';
import { ProjectAddEditComponent } from './project-add-edit/project-add-edit.component';
import { StoreModule } from '@ngrx/store';
import { projectFeatureKey, projectReducer } from '../../data/store/project/project.reducer';
import { ProjectService } from '../../data/services/project.service';
import { SuperLoaderService } from '../../core/service/super-loader.service';
import { ProjectData } from '../../data/interface/project';
import * as textConfiguration from '../../../assets/branding/text-branding.json';
import { SharedModule } from '../../shared/shared.module';
import { ButtonType, FailderSuccessMessages, superToaster } from '../../core/utils/constant';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { CommonService } from '../../core/service/common.service';
import { SuperToasterService } from '../../shared/services/super-toaster.service';

@Component({
  selector: 'app-project',
  imports: [CommonModule, MaterialModule, SharedModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class ProjectComponent implements OnInit {

  staticText: any = (textConfiguration as any).default;

  projectPendinglist: ProjectData[] | any = [];
  projectCompletedlist: ProjectData[] | any = [];

  buttonTypeProps = ButtonType;
  projectDragStatus: boolean = false;

  readonly dialog = inject(MatDialog);

  constructor(
    private _common: CommonService,
    private _project: ProjectService,
    private _loader: SuperLoaderService,
    private _toaster: SuperToasterService,
  ) { }

  ngOnInit(): void {
    this.initialDependencies();
  }

  initialDependencies() {
    this.projectPendinglist = this.staticText?.layout?.project?.pending_data;
    this.projectCompletedlist = this.staticText?.layout?.project?.completed_data;
    this.getProjectData();
  }

  ngAfterContentInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    this.mapDataId();

  }

  mapDataId() {
    this.projectPendinglist = this.projectPendinglist.map((value: ProjectData, index: number) => ({
      ...value,
      id: index + 1
    }))

    this.projectCompletedlist = this.projectCompletedlist.map((value: ProjectData, index: number) => ({
      ...value,
      id: index + 1
    }))

  }

  getProjectData() {
    this._project.getFormValues().subscribe((value: ProjectData | any) => {

      value = value.map((val: ProjectData) => ({
        ...val,
        actions: { edit: true, delete: true }
      }))

      value.forEach((data: ProjectData) => {
        if (data.status.toLowerCase() === 'pending') {
          this.projectPendinglist.push(data);
        } else if (data.status.toLowerCase() === 'completed') {
          this.projectCompletedlist.push(data);
        }
      })


      this.projectCompletedlist = this.projectCompletedlist.reverse();
      this.projectPendinglist = this.projectPendinglist.reverse();
    })
    this.mapDataId();
  }

  openProjectForm() {
    const projectRef = this.dialog.open(ProjectAddEditComponent, {
      width: "95%",
      minHeight: "95%",
      data: {
        projectEdit: false
      },
      hasBackdrop: true,
      disableClose: true
    });

    projectRef?.componentInstance?.projectAddEvent.subscribe((value: any) => {
      this._project.getLoadingStatus().subscribe((value: boolean) => {

        if (value) {
          this._loader.showLoader()
        }
      })

      this.getProjectData();

      let payload: any = { ...value, refKey: JSON.parse(JSON.stringify(`${value.title.substring(0, 3)}_project`)) }
      this._project.addProject(payload);
      this._project.getSuccessStatus().subscribe((value: boolean) => {
        if (value) {
          this._loader.hideLoader();
          this._toaster.openToaster(superToaster.SUCCESS, FailderSuccessMessages.PROJECT_SUCCESS_ADD_MSG)

        }
      })
    })
  }

  drop(event: CdkDragDrop<string[]> | any) {
    this.projectDragStatus = true;

    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }

    if (this.projectCompletedlist.some((val: ProjectData) => val.id === event.container.data[event.currentIndex]?.id)) {
      event.container.data[event.currentIndex].status = 'completed';
      return
    } else if (this.projectPendinglist.some((val: ProjectData) => val.id === event.container.data[event.previousIndex]?.id)) {
      event.container.data[event.previousIndex].status = 'pending';
      return
    }
  }

  deleteProject(data: ProjectData, pendingData: boolean = false) {
    this._project.getLoadingStatus().subscribe((value: boolean) => value && this._loader.showLoader());
    this._project.deleteProject(data);
    if (pendingData) {
      this.projectPendinglist.splice(this.projectPendinglist.findIndex((val: ProjectData) => val.id === data?.id), 1);
      this._project.getSuccessStatus().subscribe((value: boolean) => value && this._loader.hideLoader());
      this._toaster.openToaster(superToaster.FAILED, FailderSuccessMessages.PROJECT_PENDING_DELETED_MSG);
    } else {
      this.projectCompletedlist.splice(this.projectCompletedlist.findIndex((val: ProjectData) => val.id === data?.id), 1);
      this._project.getSuccessStatus().subscribe((value: boolean) => value && this._loader.hideLoader());
      this._toaster.openToaster(superToaster.FAILED, FailderSuccessMessages.PROJECT_COMPLETED_DELETED_MSG);
    }
  }

  editProject(id: number, pendingForm: boolean = false, projectData: ProjectData) {
    const editProjectDialog = this.dialog.open(ProjectAddEditComponent, {
      width: "95%",
      minHeight: "95%",
      hasBackdrop: true,
      disableClose: true,
      data: {
        formData: projectData,
        projectEdit: true
      }
    })

    editProjectDialog?.componentInstance?.projectEditEvent.subscribe((value: any) => {
      this._project.getLoadingStatus().subscribe((value: boolean) => {

        if (value) {
          this._loader.showLoader()
        }
      })
      let refKey = pendingForm ? this.projectPendinglist[id].refKey : this.projectCompletedlist[id].refKey
      let payload: any = { ...value, refKey }
      this._project.editProject(payload);
      this._project.getSuccessStatus().subscribe((value: boolean) => {

        if (value) {
          this._loader.hideLoader()
          this._toaster.openToaster(superToaster.SUCCESS, FailderSuccessMessages.PROJECT_SUCCESS_UPDATE_MSG);
        }
      })
    })
  }
}
