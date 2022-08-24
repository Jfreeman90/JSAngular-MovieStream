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
  private apiReommended: string='http://sakillaapi-env.eba-wnfxdqg3.us-east-1.elasticbeanstalk.com/films/recommended';
  private apiRandom: string='http://sakillaapi-env.eba-wnfxdqg3.us-east-1.elasticbeanstalk.com/films/random';
  private apiReserveTicket: string='http://sakillaapi-env.eba-wnfxdqg3.us-east-1.elasticbeanstalk.com/films/get_ticket?id=';
  private apiSearchTitle: string='http://sakillaapi-env.eba-wnfxdqg3.us-east-1.elasticbeanstalk.com/films/find_containing?titleString=';
  private apiGetAllFilmsInCategory: string='http://sakillaapi-env.eba-wnfxdqg3.us-east-1.elasticbeanstalk.com/films/get_by_category?category=';
  private apiGetAllFilmsInLanguage: string='http://sakillaapi-env.eba-wnfxdqg3.us-east-1.elasticbeanstalk.com/films/get_by_language?language=';
  private apiURLRateFilm: string='http://sakillaapi-env.eba-wnfxdqg3.us-east-1.elasticbeanstalk.com/films/update_score?id=';

  constructor(private http:HttpClient) { }

  //get one film from id
  getFilmFromId(id: string): Observable<Film>{
    //return the task array from the api
    return this.http.get<Film>(this.apiURLFilmById+id);
  }

  //get one random film
  getRandomFilm(): Observable<Film>{
    //return the task array from the api
    return this.http.get<Film>(this.apiRandom);
  }

  //get a list of 5 films that are the top rated films
  getTopRatedFilms(): Observable<Film[]>{
    //return the task array from the api
    return this.http.get<Film[]>(this.apiURLTopRated);
  }

  //get a list of three films that are random until recommended algorithm completed.
  getRecommendedFilms(): Observable<Film[]>{
    //return the task array from the api
    return this.http.get<Film[]>(this.apiReommended);
  }

  //add one to the tickets reserved for a particular film based on the ID
  reserveTicket(id: number){
    return this.http.patch<Film>(this.apiReserveTicket+id, id);
  }

  //get film list returned when a film title is searched for
  getFilmFromTitle(title: string){
    //return the task array from the api
    return this.http.get<Film[]>(this.apiSearchTitle+title);
  }

  //get films using a category
  getFilmsFromCategory(category: string){
    //return the task array from the api
    return this.http.get<Film[]>(this.apiGetAllFilmsInCategory+category);
  }

  //get films using a language
  getFilmFromLanguage(language: string){
    //return the task array from the api
    return this.http.get<Film[]>(this.apiGetAllFilmsInLanguage+language);
  }

  //add score to the
  rateFilm(id:number, newScore:string){
    return this.http.patch<Film>(this.apiURLRateFilm+id+'&newScore='+newScore, {id,newScore});
  }

}
