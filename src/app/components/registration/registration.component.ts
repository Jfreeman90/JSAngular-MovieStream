import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/User';                  //user interface to get the user json format
import { UserService } from 'src/app/user.service';   //user service to get in touch with the API
import { Router } from '@angular/router';             //allows to redirect after a task is completed

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  //variables for the registration form
  email: string;
  username: string;
  password: string;
  password_check: string;
  mailing_list: boolean=true;
  //variable for a User
  user: User;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    //validate the forms have been completed with the values neede
    if (!this.email){
      let passwordContainer=document.getElementById("email-container");
      passwordContainer.innerHTML+=`Please enter an email!`;
      return
    }
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
    if (!this.password_check){
      let passwordContainer=document.getElementById("password-check-container");
      passwordContainer.innerHTML+=`Please confirm your password!`;
      return
    }

    //add logic to check password meets the rules

    //check the password and password_check are the same
    if (this.password!==this.password_check){
      let passwordCheckContainer=document.getElementById("password-check-container");
      passwordCheckContainer.innerHTML+=`Passwords were not the same; re-enter to confirm.`;
      //set the border of the input to red
      let passwordCheckInput=document.getElementById('password_check');
      passwordCheckInput.style.border="1px solid red";
      //clear password inputs to allow user to renter them easily
      this.password='';
      this.password_check='';
      return
    }

    //send the new user to the database and save it
    this.userService.addUser(this.email, this.username, this.password).subscribe(() => {
      //redirect user to login once user has been created
      this.router.navigate(['/login'])
    });
 }
}
