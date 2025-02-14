import { Component } from '@angular/core';


@Component({
  standalone: false,
  selector: 'app-counter',
  template: `<h2>Counter works!</h2>`,
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
