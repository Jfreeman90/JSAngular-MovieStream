import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'  //remeber to add httpclient as a module
import { Observable } from 'rxjs';
import { Film } from './Film';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
    })
}

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  //sakila api urls
  private apiURLFilmById:string='http://sakillaapi-env.eba-wnfxdqg3.us-east-1.elasticbeanstalk.com/films/';
  private apiURLTopRated: string='http://sakillaapi-env.eba-wnfxdqg3.us-east-1.elasticbeanstalk.com/films/top_rated';

  constructor(private http:HttpClient) { }

  //get one film from id
  getFilmFromId(id: number): Observable<Film>{
    //return the task array from the api
    return this.http.get<Film>(this.apiURLFilmById+id);
  }

  //get a list of 5 films that are the top rated films
  getTopRatedFilms(): Observable<Film[]>{
    //return the task array from the api
    return this.http.get<Film[]>(this.apiURLTopRated);
  }
}
