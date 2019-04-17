import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { materialDependencies } from './material-dependencies.array';
import { sharedComponents } from './shared-components.array';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    ...materialDependencies
  ],
  declarations: [...sharedComponents],
  providers: [],
  exports: [...materialDependencies, ...sharedComponents]
})
export class SharedModule {}
