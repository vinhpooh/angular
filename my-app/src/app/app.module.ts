import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CollectionService } from './core/services/collection.service';
import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';
import { ItemsModule } from './items/items.module';
import { PageNotFoundModule } from './page-not-found/page-not-found.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';

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
