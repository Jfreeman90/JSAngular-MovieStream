import { Component, OnInit } from '@angular/core';
import { faFaceSmile} from '@fortawesome/free-solid-svg-icons';
import { faHandsClapping} from '@fortawesome/free-solid-svg-icons';
import { faGear} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-chatsubmit',
  templateUrl: './chatsubmit.component.html',
  styleUrls: ['./chatsubmit.component.css']
})
export class ChatsubmitComponent implements OnInit {
  //variables needed for the font awesome icons
  faFaceSmile=faFaceSmile;
  faHandsClapping=faHandsClapping;
  faGear=faGear;

  constructor() { }

  ngOnInit(): void {
  }

}
