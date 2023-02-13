import { Component } from '@angular/core';
import { FilmService } from 'src/app/Service/film.service';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent {

  films : any [] = []; // initialise le tableau a tableau vide
  selected: any;



  constructor( private _filmService:  FilmService,){
    this.films = _filmService.films //a la variable _filmService je lui passe le tableau film de
  }
}
