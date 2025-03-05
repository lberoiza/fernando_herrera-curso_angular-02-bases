import { Component, signal, WritableSignal } from '@angular/core';
import { DragonballCharacter } from '../../models/DragonballCharacter';
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
    {id: 1, name: 'Goku', power: 9000},
    {id: 2, name: 'Vegeta', power: 8000},
    {id: 3, name: 'Gohan', power: 6000},
    {id: 4, name: 'Piccolo', power: 4000},
    {id: 5, name: 'Krillin', power: 2000},
    {id: 6, name: 'Yamcha', power: 500},
  ])

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
    return power >= 2000;

  }
}
