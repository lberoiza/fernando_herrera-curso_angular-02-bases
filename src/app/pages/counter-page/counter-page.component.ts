import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-page',
  imports: [],
  templateUrl: './counter-page.component.html',
  styleUrl: './counter-page.component.css'
})
export class CounterPageComponent {
  protected counter: number = 0;

  protected increaseBy(number: number) {
    this.counter += number;
  }

  protected resetCounter() {
    this.counter = 0;
  }
}
