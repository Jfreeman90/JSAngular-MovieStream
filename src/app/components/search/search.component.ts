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
      let filmsFound=this.films.length;
      //update the html with films found
      let searchInfo=document.getElementById('searches-found');
      searchInfo.innerHTML=`Search (${this.searchinput}) returned ${filmsFound} results`;
      //update thh height of the schedule-container
      let searchContainer=document.getElementById("search-box-container");
      //height of the element dfepends on how many items were found in the search and the current width of the container
      let containerWidth=searchContainer.clientWidth;
      let maxItemsPerRow=Math.floor(containerWidth/190); //190 is the width of the search item component
      console.log(maxItemsPerRow);
      let rowsNeeded=Math.ceil(filmsFound/maxItemsPerRow);
      console.log(rowsNeeded);
      let heightVar=130+(300*rowsNeeded);
      searchContainer.style.height=`${heightVar}px`;
    }
      );

  }
}
