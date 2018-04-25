import { Component, OnInit } from '@angular/core';
import { CollectionService } from '../../../core/services/collection.service';
import { Item } from '../../../shared/models/item.model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent implements OnInit {

  // ajout de service privé --> accessible que depuis le ts
  constructor(private collectionService: CollectionService) { }

  // attribut public --> accessible dans le html
  collection: Observable<Item[]>;

  ngOnInit() {
    this.collection = this.collectionService.collection;
  }

}
