import { Component } from '@angular/core';
//import the icons you want to use from the package
import { faTurnUp} from '@fortawesome/free-solid-svg-icons';
import { faHome} from '@fortawesome/free-solid-svg-icons';
import { faPen} from '@fortawesome/free-solid-svg-icons';
import { faPhone} from '@fortawesome/free-solid-svg-icons';
import { faRightFromBracket} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //allow the app.component.html to get the svg files from fornt awsesome as variable names here.
  faTurnUp = faTurnUp;
  faHome = faHome;
  faPen=faPen;
  faPhone=faPhone;
  faRightFromBracket=faRightFromBracket;

  constructor(){
  }

  logOut(){
    //clear local storage
    localStorage.clear();
  }
}
