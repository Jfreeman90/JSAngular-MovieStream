import { Component, OnInit } from '@angular/core';
import { Film } from 'src/app/Film';
import { ActivatedRoute } from '@angular/router';
import { FilmService } from 'src/app/film.service';

@Component({
  selector: 'app-filmpage',
  templateUrl: './filmpage.component.html',
  styleUrls: ['./filmpage.component.css']
})
export class FilmpageComponent implements OnInit {
  //load the film page and get the id from the link to send the information to the filmdeails component.
  //variable for the id
  public id:string;
  //variable for the film object that can be populated by the id
  public film: Film;

  //constructors
  constructor(private route:ActivatedRoute, private filmService: FilmService) { }

  ngOnInit() {
    //get the ID of the film from the url
    this.id=this.route.snapshot.paramMap.get('id');
    let idNum: number=+this.id;
    //fill the films variable with the results of the API request
    this.filmService.getFilmFromId(idNum).subscribe((film) => this.film=film);
  }
}
