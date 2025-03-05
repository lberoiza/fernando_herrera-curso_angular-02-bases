import { Component, computed, signal, WritableSignal } from '@angular/core';
import type { DragonballCharacter } from '../../models/DragonballCharacter';
import { DragonballCharacterListComponent } from '../../components/dragonball/character-list/character-list.component';

@Component({
  selector: 'app-dragonball-super-page',
  templateUrl: './dragonball-super-page.component.html',
  imports: [
    DragonballCharacterListComponent
  ],
  styleUrl: './dragonball-super-page.component.css'
})
export class DragonballSuperPageComponent {

  characters: WritableSignal<DragonballCharacter[]> = signal<DragonballCharacter[]>([
    {id: 1, name: 'Goku', power: 9000},
    {id: 3, name: 'Vegeta', power: 8000},
  ])

  newCharacterName = signal<string>('');
  newCharacterPower = signal<number>(0);


  newCharacterPreview = computed(() => `${this.newCharacterName()} (${this.newCharacterPower()})`);


  addCharacter() {
    if (!this.newCharacterName().trim() || this.newCharacterPower() <= 0) {
      console.error('No name or Not enough Power!');
      return;
    }
    const newCharacter: DragonballCharacter = {
      id: this.characters().reduce((max, character) => character.id > max ? character.id : max, 0) + 1,
      name: this.newCharacterName().trim(),
      power: this.newCharacterPower()
    }
    this.characters.update(currentList => [...currentList, newCharacter]);
    this.resetFields();
  }

  resetFields() {
    this.newCharacterName.set('');
    this.newCharacterPower.set(0);
  }
}
