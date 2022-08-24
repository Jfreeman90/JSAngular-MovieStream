import { Component, Input, OnInit } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Film } from 'src/app/Film';
import { FilmService } from 'src/app/film.service';

@Component({
  selector: 'app-filmdetails',
  templateUrl: './filmdetails.component.html',
  styleUrls: ['./filmdetails.component.css']
})
export class FilmdetailsComponent implements OnInit {
  //star icon
  faStar=faStar;
  //connect an input to the component
  @Input() film: Film;

  constructor(private filmService: FilmService) { }

  ngOnInit(): void {
  }

  oneStar(){
    //update the film rating using the API with the score clicked and the film ID
    this.filmService.rateFilm(this.film.filmId, "1").subscribe((response)=>{
      this.film=response;
      //update the html DOM element with the new tickets reserved
      document.getElementById("current-rating").innerHTML=`<p>Current rating : ${this.film.score} <fa-icon [icon]="faStar"></fa-icon> (${this.film.scoreCount})</p>`;
    });
  }

  twoStar(){
    //update the film rating using the API with the score clicked and the film ID
    this.filmService.rateFilm(this.film.filmId, "2").subscribe((response)=>{
      this.film=response;
      //update the html DOM element with the new tickets reserved
      document.getElementById("current-rating").innerHTML=`<p>Current rating : ${this.film.score} <fa-icon [icon]="faStar"></fa-icon> (${this.film.scoreCount})</p>`;
    });
  }

  threeStar(){
    //update the film rating using the API with the score clicked and the film ID
    this.filmService.rateFilm(this.film.filmId, "3").subscribe((response)=>{
      this.film=response;
      //update the html DOM element with the new tickets reserved
      document.getElementById("current-rating").innerHTML=`<p>Current rating : ${this.film.score} <fa-icon [icon]="faStar"></fa-icon> (${this.film.scoreCount})</p>`;
    });
  }

  fourStar(){
    //update the film rating using the API with the score clicked and the film ID
    this.filmService.rateFilm(this.film.filmId, "4").subscribe((response)=>{
      this.film=response;
      //update the html DOM element with the new tickets reserved
      document.getElementById("current-rating").innerHTML=`<p>Current rating : ${this.film.score} <fa-icon [icon]="faStar"></fa-icon> (${this.film.scoreCount})</p>`;
    });
  }

  fiveStar(){
    //update the film rating using the API with the score clicked and the film ID
    this.filmService.rateFilm(this.film.filmId, "5").subscribe((response)=>{
      this.film=response;
      //update the html DOM element with the new tickets reserved
      document.getElementById("current-rating").innerHTML=`<p>Current rating : ${this.film.score} <fa-icon [icon]="faStar"></fa-icon> (${this.film.scoreCount})</p>`;
    });
  }

  sixStar(){
    //update the film rating using the API with the score clicked and the film ID
    this.filmService.rateFilm(this.film.filmId, "6").subscribe((response)=>{
      this.film=response;
      //update the html DOM element with the new tickets reserved
      document.getElementById("current-rating").innerHTML=`<p>Current rating : ${this.film.score} <fa-icon [icon]="faStar"></fa-icon> (${this.film.scoreCount})</p>`;
    });
  }

  sevenStar(){
    //update the film rating using the API with the score clicked and the film ID
    this.filmService.rateFilm(this.film.filmId, "7").subscribe((response)=>{
      this.film=response;
      //update the html DOM element with the new tickets reserved
      document.getElementById("current-rating").innerHTML=`<p>Current rating : ${this.film.score} <fa-icon [icon]="faStar"></fa-icon> (${this.film.scoreCount})</p>`;
    });
  }

  eightStar(){
    //update the film rating using the API with the score clicked and the film ID
    this.filmService.rateFilm(this.film.filmId, "8").subscribe((response)=>{
      this.film=response;
      //update the html DOM element with the new tickets reserved
      document.getElementById("current-rating").innerHTML=`<p>Current rating : ${this.film.score} <fa-icon [icon]="faStar"></fa-icon> (${this.film.scoreCount})</p>`;
    });
  }

  nineStar(){
    //update the film rating using the API with the score clicked and the film ID
    this.filmService.rateFilm(this.film.filmId, "9").subscribe((response)=>{
      this.film=response;
      //update the html DOM element with the new tickets reserved
      document.getElementById("current-rating").innerHTML=`<p>Current rating : ${this.film.score} <fa-icon [icon]="faStar"></fa-icon> (${this.film.scoreCount})</p>`;
    });
  }

  tenStar(){
    //update the film rating using the API with the score clicked and the film ID
    this.filmService.rateFilm(this.film.filmId, "10").subscribe((response)=>{
      this.film=response;
      //update the html DOM element with the new tickets reserved
      document.getElementById("current-rating").innerHTML=`<p>Current rating : ${this.film.score} <fa-icon [icon]="faStar"></fa-icon> (${this.film.scoreCount})</p>`;
    });
  }
}
