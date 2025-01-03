import { inject, Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { superToaster } from '../../core/utils/constant';

@Injectable({
  providedIn: 'root'
})
export class SuperToasterService {
  private _snackBar = inject(MatSnackBar);

  constructor() { }

  openToaster(type: superToaster, message: string, config?: MatSnackBarConfig) {
    let action = 'Close';
    config = {
      duration: 3000,
      horizontalPosition: 'end',
      verticalPosition: 'top'
    }

    switch (type) {
      case superToaster.SUCCESS:
        config.panelClass = 'super-success-toaster';
        this._snackBar.open(message, action, config);
        break;
      case superToaster.FAILED:
        config.panelClass = 'super-failed-toaster';
        this._snackBar.open(message, action, config);
        break;
    }
  }
}
