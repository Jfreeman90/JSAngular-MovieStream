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
  //variable to get a value for the search category and auto checked to film
  searchOption: string="film";
  //an empty array of films
  films: Film[]=[];

  constructor(private filmService: FilmService) {
  }

  ngOnInit(): void {
  }

  searchSent(){
    //fill the films array with the results of the API request depending on which search the user wants
    if (this.searchOption==="category"){
      //if the user searches for a category
      this.filmService.getFilmsFromCategory(this.searchinput).subscribe((films) => {
      this.films=films;
      //display the found films
      let filmsFound=this.films.length;
      //update the html with films found
      let searchInfo=document.getElementById('searches-found');
      searchInfo.innerHTML=`Search for category (${this.searchinput}) returned ${filmsFound} results`;
      //update thh height of the schedule-container
      let searchContainer=document.getElementById("search-box-container");
      //height of the element dfepends on how many items were found in the search and the current width of the container
      let containerWidth=searchContainer.clientWidth;
      let maxItemsPerRow=Math.floor(containerWidth/190); //190 is the width of the search item component
      let rowsNeeded=Math.ceil(filmsFound/maxItemsPerRow);
      let heightVar=75+(300*rowsNeeded);
      console.log(heightVar);
      searchContainer.style.height=`${heightVar}px`;
      });
    } else if (this.searchOption==="language"){
      //if the user searches for a language
      this.filmService.getFilmFromLanguage(this.searchinput).subscribe((films) => {
      this.films=films;
      let filmsFound=this.films.length;
      let searchInfo=document.getElementById('searches-found');
      searchInfo.innerHTML=`Search for language (${this.searchinput}) returned ${filmsFound} results`;
      let searchContainer=document.getElementById("search-box-container");
      let containerWidth=searchContainer.clientWidth;
      let maxItemsPerRow=Math.floor(containerWidth/190);
      let rowsNeeded=Math.ceil(filmsFound/maxItemsPerRow);
      let heightVar=75+(300*rowsNeeded);
      console.log(heightVar);
      searchContainer.style.height=`${heightVar}px`;
      });
    }else {
      //default search for a title
      this.filmService.getFilmFromTitle(this.searchinput).subscribe((films) => {
      this.films=films;
      let filmsFound=this.films.length;
      let searchInfo=document.getElementById('searches-found');
      searchInfo.innerHTML=`Search for film (${this.searchinput}) returned ${filmsFound} results`;
      let searchContainer=document.getElementById("search-box-container");
      let containerWidth=searchContainer.clientWidth;
      let maxItemsPerRow=Math.floor(containerWidth/190);
      let rowsNeeded=Math.ceil(filmsFound/maxItemsPerRow);
      let heightVar=75+(300*rowsNeeded);
      console.log(heightVar);
      searchContainer.style.height=`${heightVar}px`;
      });
    }

  }
}
