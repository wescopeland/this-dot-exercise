import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({ providedIn: 'root' })
export class NotificationService {
  constructor(private _snackBar: MatSnackBar) {}

  notify(message: string, duration = 7000): void {
    this._snackBar.open(message, 'CLOSE', {
      duration: duration
    });
  }
}
