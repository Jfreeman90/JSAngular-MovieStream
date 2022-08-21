import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    //validate the forms have been completed with the values neede
    if (!this.email){
      alert('Please enter an email!');
      return
    }
    if (!this.username){
      alert('Please enter a username!');
      return
    }
    if (!this.password){
      alert('Please enter a password!');
      return
    }
    if (!this.password_check){
      alert('Please confirm your password!');
      return
    }

    //add logic to check password meets the rules

    //check the password and password_check are the same 
    if (this.password!==this.password_check){
      alert('You passwords are not the same. Confirm your password again.');
      //clear password inputs to allow user to renter them easily
      this.password='';
      this.password_check='';
      return
    }

    //create the new user once validations are checked
    const newUser={
      email: this.email,
      username: this.username,
      password: this.password,
      mailing_list: this.mailing_list
    }

     //clear the form after submission
     this.email='';
     this.username='';
     this.password='';
     this.password_check='';
     this.mailing_list=true;

    //print out/send the user to the database
    console.log(newUser)
  }
}
