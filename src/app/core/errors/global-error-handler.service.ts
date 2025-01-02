import { ErrorHandler, inject, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
@Injectable()
export class GlobalErrorHandlerService implements ErrorHandler {
  private readonly _snackBar = inject(MatSnackBar);

  handleError(error: Error) {
    this._snackBar.open(error.message, 'OK', {
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }
}
