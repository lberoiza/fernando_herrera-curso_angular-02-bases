import { Injectable, signal, WritableSignal } from '@angular/core';
import type { DragonballCharacter } from '../../models/DragonballCharacter';

@Injectable({
  providedIn: 'root'
})
export class DragonballCharacterService {

  characters: WritableSignal<DragonballCharacter[]> = signal<DragonballCharacter[]>([
    {id: 1, name: 'Goku', power: 9000},
    {id: 3, name: 'Vegeta', power: 8000},
  ])


  saveCharacter(newCharacter: DragonballCharacter) {
    this.characters.update(currentList => [...currentList, newCharacter]);
  }
}
