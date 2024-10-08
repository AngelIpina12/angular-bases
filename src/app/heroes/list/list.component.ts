import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroNames: string[] = ['Spiderman', 'Iron Man', 'Hulk', 'She-Hulk', 'Thor'];
  public deletedHero: string | null = null;
  deleteLastHero(){
    this.deletedHero = this.heroNames.pop() || null;
  }
}
