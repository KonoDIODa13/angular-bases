import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid'

@Injectable({
  providedIn: 'root'
})
export class DBZService {

  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Krilling',
      power: 1000
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 9999
    },
    {
      id: uuid(),
      name: "Vegeta",
      power: 7500
    }
  ];

  addCharacter(character: Character): void {
    const newCharacter = {
      id: uuid(), ...character
    };
    this.characters.push(newCharacter);
  }
  onDeleteCharacterById(id: string) {
    this.characters = this.characters.filter(character => character.id != id);
  }
  // onDeleteCharacter(index: number): void {
  //   this.characters.splice(index, 1);
  // }

}
