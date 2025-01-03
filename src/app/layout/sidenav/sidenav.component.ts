import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, input, OnInit, Output, ViewChildren, ViewEncapsulation } from '@angular/core';
import { MaterialModule } from '../../shared/material.module';
import * as textConfiguration from '../../../assets/branding/text-branding.json';
import { Router, RouterModule } from '@angular/router';
import { CommonService } from '../../core/service/common.service';

@Component({
  selector: 'sidenav',
  imports: [CommonModule, RouterModule, MaterialModule],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class SidenavComponent implements OnInit {

  staticText: any = (textConfiguration as any).default;

  @Input() toggleSidenavStatus: boolean = false;

  constructor(public _common: CommonService, private router: Router) {

  }

  ngOnInit(): void {
    this.initialDependencies();
  }

  initialDependencies() {
    this.mapRouteToMenus();
  }

  mapRouteToMenus() {
    this.staticText.layout.sidenav.menus = this.staticText.layout?.sidenav?.menus.map((value: any) => ({
      ...value,
      route: this.getMenuRouteValue(value, '')
    }))
  }


  getMenuRouteValue(value: any, route: any) {
    switch (value?.key) {
      case 'dashboard':
        return route = '/page/dashboard/'
        break;
      case 'project':
        return route = '/page/project/'
        break;
      case 'mytask':
        return route = '/page/mytask/'
        break;
    }
    return route
  }

  logout() {
    this.router.navigate(['/auth/login'])
  }
}
