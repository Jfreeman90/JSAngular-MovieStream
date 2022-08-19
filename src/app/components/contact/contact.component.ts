import { Component, OnInit } from '@angular/core';
import { faFacebook} from '@fortawesome/free-brands-svg-icons'
import { faInstagram} from '@fortawesome/free-brands-svg-icons'
import { faTwitter} from '@fortawesome/free-brands-svg-icons'
import { faTiktok} from '@fortawesome/free-brands-svg-icons'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  //import the variables that allow the font awesome icons to be used
  faFacebook=faFacebook;
  faInstagram=faInstagram;
  faTwitter=faTwitter;
  faTiktok=faTiktok;

  constructor() { }

  ngOnInit(): void {
  }

}
