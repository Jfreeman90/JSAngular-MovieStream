import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/User';                  //user interface to get the user json format
import { UserService } from 'src/app/user.service';   //user service to get in touch with the API
import { Router } from '@angular/router';

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
  constructor(private userService: UserService,
               private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    //validate username and password arent empty fields

    if (!this.username){
      let usernameContainer=document.getElementById("username-container");
      usernameContainer.innerHTML+=`Please enter a username!`;
      return
    }
    if (!this.password){
      let passwordContainer=document.getElementById("password-container");
      passwordContainer.innerHTML+=`Please enter a password!`;
      return
    }

    //look up the user based on username
    //take the email the user input and go through the database to find the username and confirm an email has been sent.
    this.userService.getUserFromUsername(this.username).subscribe((user) =>{
      this.user=user;
      //check for empty response 'status:500' which means there is no user with this username.

      //check that the password entered matches the password in the database.
      if (this.password===this.user.password){
        //update the HTML of the forgoten password page
        let confirmation=document.getElementById("login-conformation-message");
        confirmation.innerHTML=`Log in successful!`;
        //redirect to home page if log in correct
        this.router.navigate(['/home']);
        // After the user has logged in, emit change user logged in to true
        localStorage.setItem('isUserLoggedIn',"true");
        localStorage.setItem('username', this.username)
      }else {
        let passwordContainer=document.getElementById("password-container");
        passwordContainer.innerHTML+=`Incorrect password!<br>`;
        let passwordContainerInput=document.getElementById("password");
        passwordContainerInput.style.border="1px solid red";
      }
    } );
  }

}
