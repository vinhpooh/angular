import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListItemsComponent } from './containers/list-items/list-items.component';
import { SharedModule } from '../shared/shared.module';
import { ItemsRoutingModule } from './items-routing.module';
import { AddComponent } from './containers/add/add.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ItemsRoutingModule,
    FormsModule
  ],
  declarations: [ListItemsComponent, AddComponent],
  exports: [ListItemsComponent]
})
export class ItemsModule { }
