import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class UiService {
  //control if the search is shown or not
  private showSearch: boolean=true;
  private subject = new Subject<any>();

  constructor() { }

  //change the variables when toggle task is clicked
  toggleSearch(): void{
    this.showSearch= !this.showSearch;
    this.subject.next(this.showSearch);
  }

  //what happens when toggle pressed
  onToggle(): Observable<any>{
    return this.subject.asObservable();
  }

}
