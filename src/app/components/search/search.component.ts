import { Component, OnInit } from '@angular/core';
import { Film } from 'src/app/Film';
import { FilmService } from 'src/app/film.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  //variable to get the input from the input field
  searchinput: string;
  //an empty array of films
  films: Film[]=[];

  constructor(private filmService: FilmService) {
  }

  ngOnInit(): void {
  }

  searchSent(){
    console.log("Search sent");
    //validate username and password arent empty fields
    if (!this.searchinput){
      alert('Please enter a Search!');
      return
    }
    //fill the films array with the results of the API request
    this.filmService.getFilmFromTitle(this.searchinput).subscribe((films) => {
      this.films=films;
      //update the html with films found
      let searchInfo=document.getElementById('searches-found');
      searchInfo.innerHTML=`Search (${this.searchinput}) returned ${this.films.length} results`;
    }
      );

  }
}
