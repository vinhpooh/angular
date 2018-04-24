import { Injectable } from '@angular/core';
import { Item } from '../../shared/models/item.model';
import { COLLECTION } from '../collections';

@Injectable()
export class CollectionService {

  private _collection: Item[];

  constructor() {
    this.collection = COLLECTION;
   }

  // get collection
  get collection(): Item[] {
    return this._collection;
  }

  // set collection
  set collection(collection: Item[]) {
    this._collection = collection;
  }

  // get item by id

  // update item

  // delete item

  // add item

}
