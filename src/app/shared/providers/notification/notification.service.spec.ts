import { SpectatorService } from '@netbasal/spectator';
import { createService, mockProvider } from '@netbasal/spectator/jest';
import { MatSnackBar } from '@angular/material/snack-bar';

import { NotificationService } from './notification.service';

describe('Service: NotificationService', () => {
  let snackBar;

  let spectator: SpectatorService<NotificationService> = createService({
    service: NotificationService,
    providers: [mockProvider(MatSnackBar)]
  });

  beforeEach(() => {
    snackBar = spectator.get<MatSnackBar>(MatSnackBar);
  });

  it('exists', () => {
    expect(spectator.service).toBeDefined();
  });

  it('can pop open a snackbar notification', () => {
    spectator.service.notify('mock notification');
    expect(snackBar.open).toHaveBeenCalledWith('mock notification', 'CLOSE', {
      duration: 7000
    });
  });

  it('allows the user to specify a custom notification duration', () => {
    spectator.service.notify('mock notification', 10000);
    expect(snackBar.open).toHaveBeenCalledWith('mock notification', 'CLOSE', {
      duration: 10000
    });
  });
});
