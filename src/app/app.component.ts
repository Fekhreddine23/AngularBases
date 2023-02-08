import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  /*hello: string = 'Salut les amis';
  imgPath: string = 'https://www.okvoyage.com/wp-content/uploads/2021/02/paysages-norvege-scaled.jpeg';

  toggle: boolean = false;

  sayHello() {
    console.log(this.hello);
  }
  test1() {
  const style = { color: 'red' };
  if (this.toggle) style.color = 'green';
  return style;
  }

  
  inputUser = '';
*/
user = {
  name: 'lolo',
  age: 23
};

/* Créer un composant BookDetails
qui reçoit un livre d'un composant parent
et qui l'exploite pour afficher les détails        */ 
bookInfos = {
  detail : "",
  author: "Victor",
  title: "Les miserables",
  description: "oeuvre majeure de auteur qui decrit la misere social en plein Paris post Revolutionnaire"
}

}
