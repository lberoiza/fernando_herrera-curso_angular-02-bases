import { Component } from '@angular/core';


@Component({
  standalone: false,
  selector: 'app-counter',
  templateUrl: './counter.component.html',
})
export class CounterComponent {
  public counter: number = 0;

  incrementBy(value: number): void {
    this.counter += value;
  }

  resetCounter() {
    this.counter = 0;
  }
}
