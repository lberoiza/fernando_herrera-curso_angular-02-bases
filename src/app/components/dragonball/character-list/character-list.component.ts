import { Component, input } from '@angular/core';
import { NgClass } from '@angular/common';
import type { DragonballCharacter } from '../../../models/DragonballCharacter';

@Component({
  selector: 'app-dragonball-character-list',
  imports: [
    NgClass
  ],
  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.css'
})
export class DragonballCharacterListComponent {
  title = input.required<string>()
  characters = input.required<DragonballCharacter[]>()

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


}
