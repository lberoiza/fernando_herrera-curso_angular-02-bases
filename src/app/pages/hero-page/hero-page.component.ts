import { Component, computed, signal, WritableSignal } from '@angular/core';
import { Hero } from '../../models/Hero.model';
import { TitleCasePipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-hero-page',
  imports: [
    UpperCasePipe,
    TitleCasePipe
  ],
  templateUrl: './hero-page.component.html',
  styleUrl: './hero-page.component.css'
})
export class HeroPageComponent {

  readonly ironMan: Hero = {
    name: 'IronMan',
    age: 45
  }

  readonly spiderman: Hero = {
    name: 'Spiderman',
    age: 22
  }

  hero: WritableSignal<Hero> = signal<Hero>(this.copyHero(this.ironMan));
  heroDescription = computed(() => `${this.hero().name} is ${this.hero().age} years old`);

  changeHero() {
    this.hero.set(this.copyHero(this.spiderman));
  }

  resetForm() {
    this.hero.set(this.copyHero(this.ironMan));
  }

  changeAge() {
    this.hero.update(currentHero => {
      currentHero.age = 60;
      return currentHero;
    })
  }

  private copyHero(source: Hero): Hero {
    return {
      name: source.name,
      age: source.age
    }
  }


}
