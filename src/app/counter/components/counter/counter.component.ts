import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <h1>Componente Counter</h1>
  <p>
  Counter: {{counter}}
</p>

<button (click)="increaseBy(1)">+1</button>
<button (click)="resetCounter()">reset</button>
<button (click)="increaseBy(-1)">-1</button>
<hr>`
})

export class CounterComponent {
  counter: number = 10;
  constructor() { }

  increaseBy(value: number): void {
    this.counter += value;
  }

  resetCounter(): void {
    this.counter = 10;
  }
}
