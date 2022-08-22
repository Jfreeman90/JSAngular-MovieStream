import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/User';                  //user interface to get the user json format
import { UserService } from 'src/app/user.service';   //user service to get in touch with the API

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //set up the varables with the same name as the forms
  username: string;
  password: string;
  //variable for the user element which links to the user interface which holds all information that is returned
  user: User;

  constructor(private userService: UserService) { }

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

    //look up the user based on username
    //take the email the user input and go through the database to find the username and confirm an email has been sent.
    this.userService.getUserFromUsername(this.username).subscribe((user) =>{
      this.user=user;
      //check for empty response 'status:500' which means there is no user with this username.

      //check that the password entered matches the password in the database.
      if (this.password===this.user.password){
        console.log("Log in succesful")
      }
    } );


    //clear the form after submission
    this.username='';
    this.password='';
  }

}
