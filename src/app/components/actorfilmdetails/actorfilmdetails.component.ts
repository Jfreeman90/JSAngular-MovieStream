import { Component, OnInit, Input } from '@angular/core';
import { FilmInfo } from 'src/app/Actor';

@Component({
  selector: 'app-actorfilmdetails',
  templateUrl: './actorfilmdetails.component.html',
  styleUrls: ['./actorfilmdetails.component.css']
})
export class ActorfilmdetailsComponent implements OnInit {
  @Input() film: FilmInfo;

  constructor() { }

  ngOnInit(): void {
  }

}
