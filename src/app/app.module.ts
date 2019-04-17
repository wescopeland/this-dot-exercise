import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';

import { environment } from '../environments/environment';
import { CoreModule } from '@core/core.module';
import { SharedModule } from '@shared/shared.module';
import { UserSearchModule } from './user-search/user-search.module';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    GraphQLModule,
    HttpClientModule,
    [environment.production ? [] : AkitaNgDevtools.forRoot()],
    CoreModule,
    SharedModule,
    UserSearchModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
