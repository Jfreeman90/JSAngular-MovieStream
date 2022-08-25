import { Component, OnInit } from '@angular/core';
import { faFaceSmile} from '@fortawesome/free-solid-svg-icons';
import { faHandsClapping} from '@fortawesome/free-solid-svg-icons';
import { faGear} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-chatsubmit',
  templateUrl: './chatsubmit.component.html',
  styleUrls: ['./chatsubmit.component.css']
})
export class ChatsubmitComponent implements OnInit {
  //variables needed for the font awesome icons
  faFaceSmile=faFaceSmile;
  faHandsClapping=faHandsClapping;
  faGear=faGear;
  //variable for the chat message
  chatMessage: string;

  constructor() { }

  ngOnInit(): void {
  }

  //submit the chat message
  chatSubmitButton(){
    //check there is a message to send
    if (!this.chatMessage){
      return
    }
    let username=localStorage.getItem('username');
    //update the html
    let chatContainer=document.getElementById("chat-messages-container");
    chatContainer.innerHTML+=`<div class="chat-message">
      <div class="chat-username" style="font-weight: bold; width: 90px; color: black; padding-left: 15px;">
          <p>${username}:</p>
      </div>
      <div class="chat-message" style="padding-left: 15px; color:aliceblue;">
          <p>${this.chatMessage}</p>
      </div>
      </div>`
    //clear the message
    this.chatMessage='';
  }
}
