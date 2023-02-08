import { Component,Output, EventEmitter} from '@angular/core';
import { ParentComponent } from '../parent/parent.component';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {


  @Output() incrementCounter = new EventEmitter(); //output pour aller de l'enfant au parent
  @Output() decrementCounter = new EventEmitter();

  counter = 0; //initialise a 0

  constructor() { 
    this.counter;
  }


  increment() { 
    console.log('Compteur incrémenté');
    this.incrementCounter.emit(); //2 methodes increment et decremente
  }

  decrement() {
    console.log('Compteur décrémenté');
    this.decrementCounter.emit();
  }

}

/** 
Créer 2 composants: Child et Parent
Child devra contenir 2 boutons (plus et moins)
Parent devra afficher un compteur (initialisé à zéro)

Quand on clique sur le bouton plus, le compteur est incrémenté
Quand on clique sur le bouton moins, le compteur est décrémenté

*/
 