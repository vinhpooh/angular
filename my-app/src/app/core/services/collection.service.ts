import { Injectable } from '@angular/core';
import { Item } from '../../shared/models/item.model';
import { COLLECTION } from '../collections';

@Injectable()
export class CollectionService {

  // creation d'un alias pour utiliser le getteur et setteur d'angular
  private _collection: Item[];

  constructor() {
    this.collection = COLLECTION;
   }

  // get collection
  // getteur d'angular
  get collection(): Item[] {
    return this._collection;
  }

  // set collection
  // setteur d'angular
  set collection(collection: Item[]) {
    this._collection = collection;
  }

  // get item by id

  // update item

  // delete item

  // add item

}
