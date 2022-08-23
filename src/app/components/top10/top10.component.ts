import { Component, OnInit } from '@angular/core';
import { Film } from 'src/app/Film';
import { FilmService } from 'src/app/film.service';

@Component({
  selector: 'app-top10',
  templateUrl: './top10.component.html',
  styleUrls: ['./top10.component.css']
})
export class Top10Component implements OnInit {
  //set up an array to hold the top 5 films
  films: Film[]=[];

  //set up the service constructor
  constructor(private filmService: FilmService) { }

  //as soon as component loads get a list of the top 5 films
  ngOnInit(): void {
    //fill the films array with the results of the API request
    this.filmService.getTopRatedFilms().subscribe((topFilms) => this.films=topFilms);
  }

}
