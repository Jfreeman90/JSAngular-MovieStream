import { Component, Input, OnInit } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Film } from 'src/app/Film';

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

  constructor() { }

  ngOnInit(): void {
  }

}
