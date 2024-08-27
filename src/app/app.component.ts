import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Mi primera app de Angular';
  counter = 10;
  increasedBy(value: number): void{
    this.counter += value;
  }
  resetCounter(): void{
    this.counter = 10;
  }
}


