import { Component, OnInit } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-filmitem',
  templateUrl: './filmitem.component.html',
  styleUrls: ['./filmitem.component.css']
})
export class FilmitemComponent implements OnInit {
  //star icon
  faStar=faStar;
  constructor() { }

  ngOnInit(): void {
  }

}
