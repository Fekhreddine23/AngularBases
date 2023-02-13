import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FilmService } from 'src/app/Service/film.service';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})
export class FilmListComponent {

@Input() films:any = [];
@Output() filmEmitter = new EventEmitter();

 constructor(public filmService :FilmService) {}


/**methode delete
 * 
 * 
 * 
 * je creer une methode onDelete qui appel la methode deletefilm
 * de la classe FilmService
 */
OnDelete(film: any){
  this.filmService.deleteFilm(film); /*j'appel la methode addFilm avec un param*/
}

}
