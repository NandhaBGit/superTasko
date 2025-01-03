import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../shared/material.module';
import { ProjectData } from '../../data/interface/project';
import { ProjectService } from '../../data/services/project.service';
import * as textConfiguration from '../../../assets/branding/text-branding.json';
import { SuperLoaderService } from '../../core/service/super-loader.service';
import { SuperToasterService } from '../../shared/services/super-toaster.service';
import { FailderSuccessMessages, superToaster } from '../../core/utils/constant';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, MaterialModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {

  staticText: any = (textConfiguration as any).default;

  dashboardList: ProjectData[] | any = [];

  constructor(private _project: ProjectService,
    private _loader: SuperLoaderService,
    private _toaster: SuperToasterService,
  ) { }


  ngOnInit(): void {
    this.initialDependencies();
  }

  initialDependencies() {

    this.dashboardList = [...this.staticText?.layout?.project?.pending_data, ...this.staticText?.layout?.project?.completed_data];
    this.getProjectData();
  }

  ngAfterContentInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    this.mapDataId();

  }

  mapDataId() {
    this.dashboardList = this.dashboardList.map((value: ProjectData, index: number) => ({
      ...value,
      id: index + 1
    }))

  }



  getProjectData() {
    this._loader.showLoader()
    this._project.getFormValues().subscribe((value: ProjectData | any) => {
      value.forEach((data: ProjectData) => {
        this.dashboardList.push(data);
      })
      this.dashboardList = this.dashboardList.reverse();
      setTimeout(() => {
        this._loader.hideLoader();
      }, 2000);
    })
    this.mapDataId();
  }

}
