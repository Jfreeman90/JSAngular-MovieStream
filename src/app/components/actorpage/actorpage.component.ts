import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Actor, FilmInfo } from 'src/app/Actor';
import { ActorService } from 'src/app/actor.service';

@Component({
  selector: 'app-actorpage',
  templateUrl: './actorpage.component.html',
  styleUrls: ['./actorpage.component.css']
})
export class ActorpageComponent implements OnInit {
  //variable for the id
  public id:string;
  //variable for the actor
  public actor: Actor;
  public films: FilmInfo[]=[];

  constructor(private route:ActivatedRoute, private actorService: ActorService) { }

  ngOnInit() {
    //get the ID of the film from the url
    this.id=this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    //fill the films variable with the results of the API request
    this.actorService.getActorFromId(this.id).subscribe((actor) =>
      {this.actor=actor;
        this.films=actor.films;
        console.log(this.films);
      });
  }
}
