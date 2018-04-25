import { Injectable } from '@angular/core';
import { Item } from '../../shared/models/item.model';
import { COLLECTION } from '../collections';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CollectionService {

  // creation d'un alias pour utiliser le getteur et setteur d'angular
  private _collection: Observable<Item[]>;

  private itemsCollection: AngularFirestoreCollection<Item>;

  constructor(private afs: AngularFirestore) {
    this.itemsCollection = afs.collection<Item>('items');
    this.collection = this.itemsCollection.valueChanges();
  }

  // get collection
  // getteur d'angular
  get collection(): Observable<Item[]> {
    return this._collection;
  }

  // set collection
  // setteur d'angular
  set collection(collection: Observable<Item[]>) {
    this._collection = collection;
  }

  // get item by id

  // update item

  // delete item

  // add item

}
