import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroNames: string[] = ["Spiderman", "Thor", "Ironman", "Captain America"];
  public deletedHeroe: string = "";
  borrarUltimoHeroe(): void {
    this.deletedHeroe = this.heroNames[this.heroNames.length - 1];
    this.heroNames.splice(this.heroNames.length - 1);

  }
}
