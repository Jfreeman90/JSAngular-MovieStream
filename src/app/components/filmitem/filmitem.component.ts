import { Component, OnInit, Input } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Film } from 'src/app/Film';


@Component({
  selector: 'app-filmitem',
  templateUrl: './filmitem.component.html',
  styleUrls: ['./filmitem.component.css']
})
export class FilmitemComponent implements OnInit {
  //star icon
  faStar=faStar;
  @Input() film: Film;

  constructor() { }

  ngOnInit(): void {
  }

}
