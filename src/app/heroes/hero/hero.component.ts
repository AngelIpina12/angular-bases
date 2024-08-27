import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = "Spiderman";
  public age: number = 45;

  changeName(){
    this.name = 'Spiderman';
  }

  changeAge(){
    this.age = 45;
  }

  resetForm(){
    this.name = 'Ironman';
    this.age = 25;
  }
}
