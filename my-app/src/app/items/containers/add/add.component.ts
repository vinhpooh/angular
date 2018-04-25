import { Component, OnInit } from '@angular/core';
import { CollectionService } from '../../../core/services/collection.service';
import { Router } from '@angular/router';
import { Item } from '../../../shared/models/item.model';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(
    private collectionService: CollectionService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  add(newItem: Item) {
    console.log(newItem);
    this.collectionService.collection.push(newItem);
    this.router.navigate(['/list']);
  }

}
