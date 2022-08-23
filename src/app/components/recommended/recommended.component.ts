import { Component, OnInit } from '@angular/core';
import { Film } from 'src/app/Film';
import { FilmService } from 'src/app/film.service';

@Component({
  selector: 'app-recommended',
  templateUrl: './recommended.component.html',
  styleUrls: ['./recommended.component.css']
})
export class RecommendedComponent implements OnInit {
  //set up an array to hold the 3 films that are recommenended
  films: Film[]=[];

  //set up the service constructor
  constructor(private filmService: FilmService) { }

  //as soon as component loads get a list of the top 3 recommended films
  ngOnInit(): void {
        //fill the films array with the results of the API request
        this.filmService.getRecommendedFilms().subscribe((recFilms) => this.films=recFilms);
  }

}
