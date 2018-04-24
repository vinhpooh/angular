import { Component, OnInit } from '@angular/core';
import { State } from '../../../shared/enums/state.enum';
import { Item } from '../../../shared/models/item.model';
import { CollectionService } from '../../../core/services/collection.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  libelles = Object.values(State);
  newItem: Item;
  constructor(
    private collectionService: CollectionService,
    private router: Router) { }

  ngOnInit() {
    this.reset();
  }

  reset() {
    this.newItem = {
      id: '',
      name: '',
      reference: '',
      state: State.ALIVRER
    };
  }

  process() {
    this.collectionService.collection.push(this.newItem);
    this.reset();
    this.router.navigate(['/list']);
  }

}
