import { Component, OnInit } from '@angular/core';
import { faVolumeHigh } from '@fortawesome/free-solid-svg-icons';
import { faVolumeXmark } from '@fortawesome/free-solid-svg-icons';
import { faGears } from '@fortawesome/free-solid-svg-icons';
import {  faClosedCaptioning } from '@fortawesome/free-solid-svg-icons';
import { faExpand } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-filmvideo',
  templateUrl: './filmvideo.component.html',
  styleUrls: ['./filmvideo.component.css']
})
export class FilmvideoComponent implements OnInit {
  //icons from font awesome
  faVolumeHigh=faVolumeHigh;
  faVolumeXmark=faVolumeXmark;
  faGears=faGears;
  faExpand=faExpand;
  faClosedCaptioning=faClosedCaptioning;

  constructor() { }

  ngOnInit(): void {
  }

}
