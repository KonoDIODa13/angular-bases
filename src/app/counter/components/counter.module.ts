import { NgModule } from '@angular/core';

import { CounterComponent } from './counter/counter.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  exports: [CounterComponent],
  declarations: [CounterComponent],
  providers: [],
})
export class CounterModule { }
