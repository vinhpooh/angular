import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { State } from '../../enums/state.enum';
import { Item } from '../../models/item.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  libelles = Object.values(State);
  form: FormGroup;
  @Output()
  newItem: EventEmitter<Item> = new EventEmitter<Item>();
  constructor(private formBuilder: FormBuilder) { }

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
    this.newItem.emit(this.form.value);
  }

  isError(field: string): boolean {
    return this.form.get(field).invalid && this.form.get(field).touched;
  }

}
