import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Film } from 'src/app/Film';
import { FilmService } from 'src/app/film.service';
import { Actor } from 'src/app/Actor';
import { ActorService } from 'src/app/actor.service';

@Component({
  selector: 'app-moredetailspage',
  templateUrl: './moredetailspage.component.html',
  styleUrls: ['./moredetailspage.component.css']
})
export class MoredetailspageComponent implements OnInit {
  //variable for the id
  public id:string;
  //variable for the film object that can be populated by the id
  public film: Film;
  //variable top hold the actor information
  public actors: Actor[]=[];
  //variable that will wait for the data before loading
  public isLoaded: boolean=false;

  //constructors
  constructor(private route:ActivatedRoute, private filmService: FilmService, private actorService: ActorService) { }

  ngOnInit() {
    //get the ID of the film from the url
    this.id=this.route.snapshot.paramMap.get('id');
    //fill the films variable with the results of the API request
    this.filmService.getFilmFromId(this.id).subscribe((film) => this.film=film);
    //find the actors list from the film id.
    this.actorService.getActorInFilmFromFilmId(this.id).subscribe((actors) =>
    {this.actors=actors;});
    //data is now ready to be rendered
    this.isLoaded=true;
  }
}
