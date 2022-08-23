import { Component, Input, OnInit } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
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

  constructor() { }

  ngOnInit(): void {
  }

}
