import { Component, OnInit, ViewEncapsulation, isDevMode } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../../shared/material.module';
import * as textConfiguration from '../../../assets/branding/text-branding.json';
import { CommonService } from '../../core/service/common.service';

@Component({
  selector: 'app-auth',
  imports: [CommonModule, RouterModule, LoginComponent, RegisterComponent, MaterialModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class AuthComponent implements OnInit {

  staticText: any = (textConfiguration as any).default;

  toggleCarousel: boolean = false;
  toggleCarouselInterval: any;
  showRegisterForm: boolean = false;


  constructor(protected _common: CommonService) { }

  ngOnInit(): void {
    this.initialDependencies();
  }

  initialDependencies() {
    if (!this._common.isMobile()) {
      this.toggleCoursel()
    }
  }

  toggleCoursel() {
    this.toggleCarouselInterval = setInterval(() => {
      this.toggleCarousel = !this.toggleCarousel;
    }, 3000);
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    clearInterval(this.toggleCarouselInterval)
  }

  routeAuthPages(page: string) {
    this.showRegisterForm = page === 'login' ? true : false;
  }
}
