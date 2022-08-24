import { Component, Input, OnInit } from '@angular/core';
import { Actor } from 'src/app/Actor';

@Component({
  selector: 'app-filmcastitem',
  templateUrl: './filmcastitem.component.html',
  styleUrls: ['./filmcastitem.component.css']
})
export class FilmcastitemComponent implements OnInit {
  @Input() actor: Actor;

  constructor() { }

  ngOnInit(): void {
  }

}
