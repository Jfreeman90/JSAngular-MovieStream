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

  //when a ticket is reserved for that film id add one to the tickets reserve and update the html.
  onReserveTicket(){
    this.filmService.reserveTicket(this.film.filmId).subscribe((response)=>{
      //update the html DOM element with the new tickets reserved
      document.getElementById("tickets-container").innerHTML=`<b>Tickets reserved:</b> ${response.ticketsReserved}`
    });

  }
}
