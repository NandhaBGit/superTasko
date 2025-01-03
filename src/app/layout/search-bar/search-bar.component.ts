import { CommonModule } from '@angular/common';
import { Component, EventEmitter, HostListener, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { MaterialModule } from '../../shared/material.module';
import * as textConfiguration from '../../../assets/branding/text-branding.json';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { CommonService } from '../../core/service/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'search-bar',
  imports: [CommonModule, MaterialModule, SharedModule, FormsModule, ReactiveFormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class SearchBarComponent implements OnInit {

  staticText: any = (textConfiguration as any).default;

  searchFormGroup!: FormGroup;
  superDarkModestatus: boolean = false;
  toggleMenu: boolean = false;

  @Output() toggleSidenavStatus = new EventEmitter(false);

  constructor(private formbuilder: FormBuilder, public _common: CommonService, private router: Router) {

  }
  @HostListener("window:beforeunload", ["$event"])
  browserRefresh(event: Event) {
    // this.toggleDarkMode();
  }

  ngOnInit(): void {
    this.initialDependencies();
  }


  initialDependencies() {
    this.createSearchFormControl();
  }

  createSearchFormControl() {
    this.searchFormGroup = this.formbuilder.group({
      query: [''],
      darkMode: ['']
    })
  }

  toggleDarkMode() {
    if (this._common.isMobile()) {
      this.superDarkModestatus = !this.superDarkModestatus;
    } else {
      this.superDarkModestatus! = this.superDarkModestatus;
    }
    const body = document.body;
    if (this.superDarkModestatus) {
      body.classList.add('dark-mode');
    } else {
      body.classList.remove('dark-mode');
    }
  }

  toggleSideNavMobile() {
    this.toggleMenu = !this.toggleMenu;
    this.toggleSidenavStatus.emit(this.toggleMenu);
  }



  logout(event: any) {
   
    if (event.route === 'login') {
      this.router.navigate(['/auth/login'])
    }
  }


}
