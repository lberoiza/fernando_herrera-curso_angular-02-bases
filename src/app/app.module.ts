import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './modules/shared/components/counter/counter.component';
import { HeroComponent } from './modules/heroes/hero/hero.component';
import { HeroListComponent } from './modules/heroes/hero-list/hero-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    HeroComponent,
    HeroListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
