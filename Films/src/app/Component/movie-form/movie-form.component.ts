import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FilmService } from 'src/app/Service/film.service';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css']
})
export class MovieFormComponent {


  /**constructor ou je passe le service film */
  /**ici injection de dependances */
  constructor(public films: FilmService){}


  onSubmit(form: NgForm) {
  console.log(form.value);
  if(form.valid){ /* si le form est valid je cree un objet de film*/ 
    const film = {
      id: form.value.id,
      title: form.value.title,
      description: form.value.description,
      releaseYear: form.value.releaseYear
    };

    this.films.addFilm(film); /*j'appel la methode addFilm avec un param*/
    
    form.reset(); /**vide le formulaire apres soumission */
    
   // this.films.deleteFilm(film);
  }

  
}

}