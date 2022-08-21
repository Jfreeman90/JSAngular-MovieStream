import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //set up the varables with the same name as the forms
  username: string;
  password: string;

  constructor(
  ) { }

  ngOnInit(): void {
  }

  onSubmit(){
    //validate username and password arent empty fields
    if (!this.username){
      alert('Please enter a username!');
      return
    }
    if (!this.password){
      alert('Please enter a password!');
      return
    }
    
    //create the new object
    const newLogin={
      username: this.username,
      password: this.password
    }

    //print the form values
    console.log(newLogin)

    //clear the form after submission
    this.username='';
    this.password='';
  }

}
