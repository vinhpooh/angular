import { Item } from '../shared/models/item.model';
import { State } from '../shared/enums/state.enum';

export const COLLECTION: Item[] = [
  {
    id: '1',
    name: 'toto',
    reference: '1111',
    state: State.ALIVRER
  },
  {
    id: '2',
    name: 'tata',
    reference: '2222',
    state: State.ENCOURS
  },
  {
    id: '3',
    name: 'titi',
    reference: '3333',
    state: State.LIVREE
  }
];
