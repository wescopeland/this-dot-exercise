import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@shared/shared.module';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [NavbarComponent, FooterComponent],
  providers: [],
  exports: [NavbarComponent, FooterComponent]
})
export class CoreModule {}
