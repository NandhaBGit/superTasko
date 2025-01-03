import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SuperLoaderService {

  showLoaderEvent = new Subject();

  constructor() { }

  showLoader() {
    this.showLoaderEvent.next(true);
  }

  hideLoader() {
    this.showLoaderEvent.next(false);
  }
}
