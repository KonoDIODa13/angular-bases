import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DBZService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class mainPageComponent {

  constructor(private DBZService: DBZService) { }

  get characters(): Character[] {
    return [...this.DBZService.characters];
  }

  onDeleteCharacter(id: string): void {
    this.DBZService.onDeleteCharacterById(id);
  }

  onNewCharacter(character: Character){
    this.DBZService.addCharacter(character);
  }
}
