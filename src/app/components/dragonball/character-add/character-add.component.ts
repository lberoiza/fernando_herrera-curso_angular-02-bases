import { Component, computed, output, signal } from '@angular/core';
import type { DragonballCharacter } from '../../../models/DragonballCharacter';

@Component({
  selector: 'app-dragonball-character-add',
  imports: [],
  templateUrl: './character-add.component.html',
  styleUrl: './character-add.component.css'
})
export class CharacterAddComponent {

  newCharacterEvent = output<DragonballCharacter>()

  newCharacterName = signal<string>('');
  newCharacterPower = signal<number>(0);

  newCharacterPreview = computed(() => `${this.newCharacterName()} (${this.newCharacterPower()})`);

  addCharacter() {
    if (!this.newCharacterName().trim() || this.newCharacterPower() <= 0) {
      console.error('No name or Not enough Power!');
      return;
    }

    const newCharacter: DragonballCharacter = {
      id: crypto.randomUUID(),
      name: this.newCharacterName().trim(),
      power: this.newCharacterPower()
    }

    this.newCharacterEvent.emit(newCharacter);
    this.resetFields();
  }

  resetFields() {
    this.newCharacterName.set('');
    this.newCharacterPower.set(0);
  }

}
