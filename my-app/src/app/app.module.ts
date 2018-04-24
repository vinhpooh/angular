import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';
import { PageNotFoundModule } from './page-not-found/page-not-found.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { ItemsModule } from './items/items.module';
import { CollectionService } from './core/services/collection.service';

@NgModule({
  imports: [
    BrowserModule,
    SharedModule,
    CoreModule,
    NgbModule.forRoot(),
    HomeModule,
    PageNotFoundModule,
    ItemsModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [CollectionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
