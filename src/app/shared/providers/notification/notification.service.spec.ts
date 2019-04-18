import { SpectatorService } from '@netbasal/spectator';
import { createService, mockProvider } from '@netbasal/spectator/jest';
import { MatSnackBar } from '@angular/material/snack-bar';

import { NotificationService } from './notification.service';

describe('Service: NotificationService', () => {
  let spectator: SpectatorService<NotificationService> = createService({
    service: NotificationService,
    providers: [mockProvider(MatSnackBar)]
  });

  it('exists', () => {
    expect(spectator.service).toBeDefined();
  });

  it('can pop open a snackbar notification', () => {
    let snackBar = spectator.get<MatSnackBar>(MatSnackBar);

    spectator.service.notify('mock notification');
    expect(snackBar.open).toHaveBeenCalledWith('mock notification', 'CLOSE', {
      duration: 7000
    });
  });
});
