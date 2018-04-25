import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CollectionService } from './core/services/collection.service';
import { CoreModule } from './core/core.module';
import { environment } from '../environments/environment.prod';
import { HomeModule } from './home/home.module';
import { PageNotFoundModule } from './page-not-found/page-not-found.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  imports: [
    BrowserModule,
    SharedModule,
    CoreModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    HomeModule,
    PageNotFoundModule, // faire cet import en dernier pour mettre le wildcard en dernier dans la route
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
    declarations: [
    AppComponent
  ],
  providers: [CollectionService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {
    if (!environment.production) {
      console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
    }
  }
}
