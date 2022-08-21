import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgotpasswordpage',
  templateUrl: './forgotpasswordpage.component.html',
  styleUrls: ['./forgotpasswordpage.component.css']
})
export class ForgotpasswordpageComponent implements OnInit {
  //set up the varables with the same name as the forms
  email: string;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    //validate username and password arent empty fields
    if (!this.email){
      alert('Please enter an email!');
      return
    }

    //create the new object
    const resetEmail={
      email: this.email,
 
    }

    //clear the form after submission
    this.email='';

    //print the form values
    console.log(resetEmail)
    alert('A password reset has been sent!');
  }
}
