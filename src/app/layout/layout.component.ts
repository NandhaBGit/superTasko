import { Component, ViewChildren, ViewEncapsulation } from '@angular/core';
import { NavigationEnd, NavigationStart, Router, RouterModule } from '@angular/router';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { CommonService } from '../core/service/common.service';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../shared/material.module';
import { MatDrawerContainer } from '@angular/material/sidenav';
import { filter } from 'rxjs';
import { SuperLoaderService } from '../core/service/super-loader.service';

@Component({
  selector: 'app-layout',
  imports: [CommonModule, RouterModule, SearchBarComponent, SidenavComponent, MaterialModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  encapsulation: ViewEncapsulation.None,
  providers: [MatDrawerContainer]
})
export class LayoutComponent {


  toggleSidenav: boolean = false;

  constructor(public _common: CommonService,
    private router: Router,
    private _loader: SuperLoaderService,
  ) {
    this.listenRouterNavigationEvents();

  }

  listenRouterNavigationEvents() {
    this.router.events
      .pipe(
        filter(
          (event) =>
            event instanceof NavigationStart || event instanceof NavigationEnd
        )
      )
      .subscribe((event) => {
        if (event instanceof NavigationStart) {
          this._loader.showLoader();
        } else if (event instanceof NavigationEnd) {
          setTimeout(() => {
            this._loader.hideLoader();
          }, 2000);
        }
      });
  }

  emittoggleStatus(event: boolean) {
    this.toggleSidenav = event;
  }
}
