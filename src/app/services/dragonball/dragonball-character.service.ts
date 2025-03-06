import { effect, Injectable, signal, WritableSignal } from '@angular/core';
import type { DragonballCharacter } from '../../models/DragonballCharacter';

const CHARACTER_KEY = 'characters';

// esta funcion flecha debe estar disponible antes de que la clase del servicio se cargue
// por lo que no puede estar dentro de la clase
const loadFromLocalStorage = (): DragonballCharacter[] => {
  const localStorageInfo = localStorage.getItem(CHARACTER_KEY);
  console.log(localStorageInfo);
  return localStorageInfo ? JSON.parse(localStorageInfo) : [];
}

@Injectable({
  providedIn: 'root'
})
export class DragonballCharacterService {

  characters: WritableSignal<DragonballCharacter[]> = signal<DragonballCharacter[]>(loadFromLocalStorage())

  saveCharacter(newCharacter: DragonballCharacter) {
    this.characters.update(currentList => [...currentList, newCharacter]);
  }

  // if the characterSignal changes, this method will be called automatically
  private saveToLocalStorage = effect(() => {
    localStorage.setItem(CHARACTER_KEY, JSON.stringify(this.characters()));
  });

}
