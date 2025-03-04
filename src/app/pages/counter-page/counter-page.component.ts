import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-counter-page',
  imports: [],
  templateUrl: './counter-page.component.html',
  styleUrl: './counter-page.component.css'
})
export class CounterPageComponent {
  protected counter: number = 0;

  //using Signals
  protected counterSignal: WritableSignal<number> = signal(0);

  protected increaseBy(number: number) {
    this.counter += number;
    this.counterSignal.update((currentValue: number) => currentValue + number);
  }

  protected resetCounter() {
    this.counter = 0;
    this.counterSignal.set(0);
  }
}
