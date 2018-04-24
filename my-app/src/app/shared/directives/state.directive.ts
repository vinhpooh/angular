import { Directive, Input, OnChanges, HostBinding } from '@angular/core';
import { State } from '../enums/state.enum';

@Directive({
  selector: '[appState]'
})
export class StateDirective implements OnChanges {
  @Input() appState: State;
  @HostBinding('class') nomClass: string;
  constructor() {}

  ngOnChanges() {
    this.nomClass = this.formatClass(this.appState);
  }

  // remove whitespaces and lowercase
  formatClass(state: string): string {
    return `state-${this.removeAccents(state)
      .toLowerCase()
      .replace(' ', '')}`;
  }

  // remove accents
  removeAccents(state: String): string {
    return state.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

}
