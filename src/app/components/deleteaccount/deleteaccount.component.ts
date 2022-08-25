import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/User';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-deleteaccount',
  templateUrl: './deleteaccount.component.html',
  styleUrls: ['./deleteaccount.component.css']
})
export class DeleteaccountComponent implements OnInit {
  username: string;
  user: User;
  password: string;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    //get user from username and then delete the account by accessing the ID
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
    //take the email the user input and go through the database to find the username and confirm an email has been sent.
    this.userService.getUserFromUsername(this.username).subscribe((user) =>{
      this.user=user;
      //check for empty response 'status:500' which means there is no user with this username.
      //check that the password entered matches the password in the database.
      if (this.password===this.user.password){
        //delete the account
        console.log(this.user.userId)
        this.userService.deleteUser(this.user.userId).subscribe((response) => {
          //clear inputs
          this.username='';
          this.password='';
          //update html
          let confirmationMessage=document.getElementById("delete-confirmation");
          confirmationMessage.innerHTML=`Account (${this.user.username}) has been deleted! Come back soon!`;
        });
      }else {
        let passwordContainer=document.getElementById("password-container");
        passwordContainer.innerHTML+=`Incorrect password!<br>`;
        let passwordContainerInput=document.getElementById("password");
        passwordContainerInput.style.border="1px solid red";
      }
    } );
  }
}
