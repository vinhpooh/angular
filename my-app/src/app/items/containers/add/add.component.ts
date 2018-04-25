import { Component, OnInit } from '@angular/core';
import { State } from '../../../shared/enums/state.enum';
import { Item } from '../../../shared/models/item.model';
import { CollectionService } from '../../../core/services/collection.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  libelles = Object.values(State);
  form: FormGroup;
  constructor(
    private collectionService: CollectionService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.form = this.formBuilder.group({
      // the FormControl called "name"
      name: ['',
        Validators.compose([Validators.required, Validators.minLength(2)])
      ],
      reference: ['',
        Validators.compose([Validators.required, Validators.minLength(5)])
      ],
      state: State.ALIVRER
    });
  }

  process() {
    console.log(this.form.value);
    this.collectionService.collection.push(this.form.value);
    this.router.navigate(['/list']);
  }

  isError(field: string): boolean {
    return this.form.get(field).invalid && this.form.get(field).touched;
  }

}
