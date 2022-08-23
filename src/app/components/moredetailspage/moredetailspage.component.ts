import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Film } from 'src/app/Film';
import { FilmService } from 'src/app/film.service';

@Component({
  selector: 'app-moredetailspage',
  templateUrl: './moredetailspage.component.html',
  styleUrls: ['./moredetailspage.component.css']
})
export class MoredetailspageComponent implements OnInit {
  //variable for the id
  public id:string;
  //variable for the film object that can be populated by the id
  film: Film;

  //constructors
  constructor(private route:ActivatedRoute, private filmService: FilmService) { }

  ngOnInit() {
    //get the ID of the film from the url
    this.id=this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    let idNum: number=+this.id;
    console.log(idNum);
    //fill the films variable with the results of the API request
    this.filmService.getFilmFromId(idNum).subscribe((film) => this.film=film);
    console.log(this.film);
  }
}
