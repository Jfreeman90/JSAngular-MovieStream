import { Component, OnInit } from '@angular/core';
import { Film } from 'src/app/Film';
import { FilmService } from 'src/app/film.service';

@Component({
  selector: 'app-scheduleitem',
  templateUrl: './scheduleitem.component.html',
  styleUrls: ['./scheduleitem.component.css']
})
export class ScheduleitemComponent implements OnInit {
  //set up a variable to hold one film
  film: Film;

  ////set up the service constructor
  constructor(private filmService: FilmService) { }

  ngOnInit(): void {
    //fill the films array with the results of the API request
    this.filmService.getRandomFilm().subscribe((film) => this.film=film);
  }

}
