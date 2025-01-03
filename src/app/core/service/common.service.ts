import { Injectable } from '@angular/core';
import { deviceSize, FORMAT } from '../utils/constant';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  togglePasswordType: boolean = false;

  toggleConfirmPasswordType: boolean = false;




  constructor(private datepipe: DatePipe) { }


  togglePassword = () => {
    return this.togglePasswordType = !this.togglePasswordType;
  }

  toggleConfirmPassword = () => {
    return this.toggleConfirmPasswordType = !this.toggleConfirmPasswordType;
  }


  /* Respective screen Detection */

  isMobile() {
    return (window.screen.width <= deviceSize.MOBILE) ? true : false;
  }

  isTablet() {
    return (window.screen.width <= deviceSize.TABLET && window.screen.width >= deviceSize.MOBILE) ? true : false;
  }

  isDesktop() {
    return (window.screen.width >= deviceSize.LAPTOP) ? true : false;
  }

  /* sorting */

  sortAscending(data: any[], sortkey?: string) {
    return data.sort((a, b) => sortkey ? a[sortkey] - b[sortkey] : a - b)
  }

  sortDscending(data: any[], sortkey?: string) {
    return data.sort((a, b) => sortkey ? b[sortkey] - a[sortkey] : b - a)
  }

  transformData(value: any, format: string = FORMAT.DATE) {
    return this.datepipe.transform(value, format);
  }
}
