import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/User';
import { UserService } from 'src/app/user.service';
@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {
  //set up the variables needed to take the inputs from the form
  username: string;
  oldPassword: string;
  newPassword: string;
  newPassword_check: string;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  //connect the onclick event to submitting and changing the users password
  changePasswordSubmit(){
    //validate the forms have been completed with the values neede
    if (!this.username){
      alert('Please enter a Username!');
      return
    }
    if (!this.oldPassword){
      alert('Please your old password!');
      return
    }
    if (!this.newPassword){
      alert('Please enter a  new password!');
      return
    }
    if (!this.newPassword_check){
      alert('Please confirm your new password!');
      return
    }

    //check the password and password_check are the same
    if (this.newPassword!==this.newPassword_check){
      alert('You passwords are not the same. Confirm your password again.');
      //clear password inputs to allow user to renter them easily
      this.newPassword='';
      this.newPassword_check='';
      return
    }

    //update the password once all checks are done
    this.userService.changePassword(this.username, this.newPassword).subscribe((response)=>{
      //update the html DOM element with the new tickets reserved
      let confirmationdiv=document.getElementById("confirmation-container");
      confirmationdiv.innerHTML=`<b>Password updated!</b>`;
      this.oldPassword='';
      this.newPassword='';
      this.newPassword_check='';
    })
  }
}
