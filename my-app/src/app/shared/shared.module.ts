import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './components/nav/nav.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ItemComponent } from './components/item/item.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule
  ],
  declarations: [NavComponent, ItemComponent],
  exports: [NavComponent, ItemComponent]
})
export class SharedModule { }
