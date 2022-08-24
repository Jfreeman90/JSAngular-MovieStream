import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'  //remeber to add httpclient as a module
import { Observable } from 'rxjs';
import { Actor } from './Actor';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
    })
}
@Injectable({
  providedIn: 'root'
})
export class ActorService {
  //sakila api urls
  private apiURLActorById:string='http://sakillaapi-env.eba-wnfxdqg3.us-east-1.elasticbeanstalk.com/actors/';
  private apiURLActorsInFilmByFilmId: string='http://sakillaapi-env.eba-wnfxdqg3.us-east-1.elasticbeanstalk.com/actors/actors_in_film?id=';
  private apiURLFilmsActorsInFirstName: string='http://sakillaapi-env.eba-wnfxdqg3.us-east-1.elasticbeanstalk.com/actors/firstname_search?partialFirstName=';

  constructor(private http:HttpClient) { }

  //get one Actor from id
  getActorFromId(id: string): Observable<Actor>{
    //return the task array from the api
    return this.http.get<Actor>(this.apiURLActorById+id);
  }

  //get one Actor from id
  getActorInFilmFromFilmId(id: string): Observable<Actor[]>{
    //return the task array from the api
    return this.http.get<Actor[]>(this.apiURLActorsInFilmByFilmId+id);
  }

  //get the actors with a first name partial match back to get a list of films they have been in
  getActorsWithFirstNameMatch(firstName: string){
    return this.http.get<Actor[]>(this.apiURLFilmsActorsInFirstName+firstName);
  }

}
