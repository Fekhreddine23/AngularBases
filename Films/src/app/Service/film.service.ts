import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root' //injectable root au niveau du service

  })
  export class FilmService {
    public films = [
      {
        id: 1,
        title: 'The Shawshank Redemption',
        description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
        releaseYear: 1994
      },
      {
        id: 2,
        title: 'The Godfather',
        description: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
        releaseYear: 1972
      },
      {
        id: 3,
        title: 'The Dark Knight',
        description: 'When the menace known as the Joker wreaks havoc and..',
        releaseYear: 1976
      }
    ]
  
}
