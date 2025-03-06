import { Component, computed, signal, WritableSignal } from '@angular/core';
import type { DragonballCharacter } from '../../models/DragonballCharacter';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-dragonball-page',
  imports: [
    NgClass
  ],
  templateUrl: './dragonball-page.component.html',
  styleUrl: './dragonball-page.component.css'
})
export class DragonballPageComponent {

  characters: WritableSignal<DragonballCharacter[]> = signal<DragonballCharacter[]>([
    {id: 'f481537c-a9eb-4423-997a-a173a1914e01', name: 'Goku', power: 9000},
    {id: 'cad8d366-2bb6-4237-ae93-207f9ce836d6', name: 'Vegeta', power: 8000},
    {id: '2a6bf327-0cd0-4d48-8b29-27f02de85fd6', name: 'Gohan', power: 6000},
    {id: '24c879a0-663d-4998-9905-6b847547dd69', name: 'Piccolo', power: 4000},
    {id: 'a7aaf148-9eca-4f6c-8cde-3001d9f5f488', name: 'Yamcha', power: 500},
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
      id: crypto.randomUUID(),
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
