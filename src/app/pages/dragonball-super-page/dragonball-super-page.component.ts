import { Component, signal, WritableSignal } from '@angular/core';
import type { DragonballCharacter } from '../../models/DragonballCharacter';
import { DragonballCharacterListComponent } from '../../components/dragonball/character-list/character-list.component';
import { CharacterAddComponent } from '../../components/dragonball/character-add/character-add.component';

@Component({
  selector: 'app-dragonball-super-page',
  templateUrl: './dragonball-super-page.component.html',
  imports: [
    DragonballCharacterListComponent,
    CharacterAddComponent
  ],
  styleUrl: './dragonball-super-page.component.css'
})
export class DragonballSuperPageComponent {

  characters: WritableSignal<DragonballCharacter[]> = signal<DragonballCharacter[]>([
    {id: 1, name: 'Goku', power: 9000},
    {id: 3, name: 'Vegeta', power: 8000},
  ])


  saveCharacter(newCharacter: DragonballCharacter) {
    this.characters.update(currentList => [...currentList, newCharacter]);
  }
}
