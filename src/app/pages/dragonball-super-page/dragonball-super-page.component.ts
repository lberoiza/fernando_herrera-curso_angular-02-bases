import { Component, computed, signal, WritableSignal } from '@angular/core';
import { DragonballCharacter } from '../../models/DragonballCharacter';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-dragonball-super-page',
  templateUrl: './dragonball-super-page.component.html',
  imports: [
    NgClass
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


  getPowerClass(power: number) {
    return {
      'text-danger': power >= 8000,
      'text-warning': power >= 6000 && power < 8000,
      'text-info': power >= 4000 && power < 6000,
    };
  }

  isGoku(name: string) {
    return name.toUpperCase() === 'GOKU';
  }

  hasEnoughPower(power: number) {
    return power >= 1000;

  }

  protected readonly Number = Number;

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
