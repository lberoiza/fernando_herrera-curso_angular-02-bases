import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  public title: string = '02-angular-bases';
  public angularVersion: number = 19;
  public counter: number = 0;

  incrementBy(value: number): void {
    this.counter += value;
  }

  resetCounter() {
    this.counter = 0;
  }
}
