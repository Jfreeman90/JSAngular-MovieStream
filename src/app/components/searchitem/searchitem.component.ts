import { Component, Input, OnInit } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FilmInfo } from 'src/app/Actor';
import { Film } from 'src/app/Film';
@Component({
  selector: 'app-searchitem',
  templateUrl: './searchitem.component.html',
  styleUrls: ['./searchitem.component.css']
})
export class SearchitemComponent implements OnInit {
  //variable for the star icon
  faStar=faStar;
  @Input() film: Film;
  @Input() filmInfo: FilmInfo;

  constructor() { }

  ngOnInit(): void {
  }

}
