import { Component, inject } from '@angular/core';
import { DragonballCharacterListComponent } from '../../components/dragonball/character-list/character-list.component';
import { CharacterAddComponent } from '../../components/dragonball/character-add/character-add.component';
import { DragonballCharacterService } from '../../services/dragonball/dragonball-character.service';

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

  // New Way to inject services in Angular 19
  dragonballCharacterService = inject(DragonballCharacterService);

}
