import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'  //remeber to add httpclient as a module
import { Observable } from 'rxjs';
import { User } from './User';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
    })
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  //from the sakila api look up the email from the users SQL table entered into the input file
  private apiURLEmailLookup:string='http://sakillaapi-env.eba-wnfxdqg3.us-east-1.elasticbeanstalk.com/users/email?email=';
  private apiURLUsernameLookup:string='http://sakillaapi-env.eba-wnfxdqg3.us-east-1.elasticbeanstalk.com/users/user?username=';
  private apiURLAddUser:string='http://sakillaapi-env.eba-wnfxdqg3.us-east-1.elasticbeanstalk.com/users/add?email=';

  //constructor allows the use of get/post/patch/del
  constructor(private http:HttpClient) { }
  //get user from username
  getUserFromUsername(username: string): Observable<User>{
    //return the task array from the api
    return this.http.get<User>(this.apiURLUsernameLookup+username);
  }

  //get user from email
  getUserFromEmail(email: string): Observable<User>{
    //return the task array from the api
    return this.http.get<User>(this.apiURLEmailLookup+email);
  }

  //add a user to the database from the registration form
  addUser(email:string, username:string, password:string): Observable<User>{
    //add the user by using the user inteface
    return this.http.post<User>(this.apiURLAddUser+email+'&username='+username+'&password='+password, httpOptions)
  }
}
