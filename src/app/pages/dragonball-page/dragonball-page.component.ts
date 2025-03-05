import { Component, signal, WritableSignal } from '@angular/core';
import { DragonballCharacter } from '../../models/DragonballCharacter';

@Component({
  selector: 'app-dragonball-page',
  imports: [],
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
  ])

}
