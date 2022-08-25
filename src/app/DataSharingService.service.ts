import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSharingServiceService {
  //keep track of a users username and if they are logged in
  constructor() { }

  public getUserLogInInfo(){
    return localStorage.getItem("isUserLoggedIn");
  }

  public getUsername(){
    return localStorage.getItem("username")
  }

}
