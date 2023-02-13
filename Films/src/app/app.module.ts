import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FilmComponent } from './Component/film/film.component';
import { FilmDetailsComponent } from './Component/film-details/film-details.component';
import { FilmListComponent } from './Component/film-list/film-list.component';
import { MovieFormComponent } from './Component/movie-form/movie-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FilmComponent,
    FilmDetailsComponent,
    FilmListComponent,
    MovieFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
