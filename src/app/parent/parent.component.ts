import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  counter = 0;

  constructor() { }


/** Détecter les 2 événements depuis le parent et mets à jour le compteur */
  increment() {
    this.counter++;
  }



  decrement() {
    this.counter--;
  } 
 

}
