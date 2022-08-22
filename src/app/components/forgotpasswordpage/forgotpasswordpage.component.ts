import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/User';                  //user interface to get the user json format
import { UserService } from 'src/app/user.service';   //user service to get in touch with the API

@Component({
  selector: 'app-forgotpasswordpage',
  templateUrl: './forgotpasswordpage.component.html',
  styleUrls: ['./forgotpasswordpage.component.css']
})

export class ForgotpasswordpageComponent implements OnInit {
  //set up the varables with the same name as the forms
  email: string;
  //variable for the user element which links to the user interface which holds all information that is returned
  user: User;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    //validate username and password arent empty fields
    if (!this.email){
      alert('Please enter an email!');
      return
    }

    //take the email the user input and go through the database to find the username and confirm an email has been sent.
    this.userService.getUserFromEmail(this.email).subscribe((user) =>{
      this.user=user;
      //check for empty response 'status:500' which means there is no user with this email.

      //update the HTML of the forgoten password page
      let confirmationP=document.getElementById("email-confirmation");
      confirmationP.innerHTML=`An password reset has been sent to: ${this.user.email}. The username is for this account is ${this.user.username}`;
    } );

    //clear the form after submission
    this.email='';
  }
}
