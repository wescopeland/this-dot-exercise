import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import 'hammerjs';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then(() => {
    if ('serviceWorker' in navigator && environment.production) {
      navigator.serviceWorker.register('/ngsw-worker.js');
    }
  })
  .catch(err => console.log(err));

console.log('Made with <3 - Wes Copeland, Apr 2019');
console.log('https://github.com/wescopeland/this-dot-exercise');
