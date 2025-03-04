import { ChangeDetectionStrategy, Component, signal, WritableSignal } from '@angular/core';
import { ButtonBarComponent } from '../../components/button-bar/button-bar.component';

@Component({
  selector: 'app-counter-page',
  imports: [
    ButtonBarComponent
  ],
  templateUrl: './counter-page.component.html',
  styleUrl: './counter-page.component.css',

  // using OnPush change detection strategy,
  // that means the library zone.js will not be used in this component
  // and the change detection will be done by Angular itself
  // the component will be not render updates from counter
  changeDetection: ChangeDetectionStrategy.OnPush
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
