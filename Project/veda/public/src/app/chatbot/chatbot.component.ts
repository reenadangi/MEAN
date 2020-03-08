import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';
import { Injectable } from '@angular/core'

const dialogflowURL = 'http://localhost:3000/api/send-msg';
@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
@Injectable({providedIn:'root'})
export class ChatbotComponent implements OnInit {
  messages = [];
  loading = false;
  userName:string;
  private userIsAuthenticated=false;
  private authListenerSubs: Subscription;

  // Random ID to maintain session with server
  sessionId = Math.random().toString(36).slice(-5);
  constructor(private authService: AuthService,private http: HttpClient) { 
    this.addBotMessage('Hello 🤖  welcome to Veda spa! ');
    
  }

  ngOnInit()   {
    this.authListenerSubs=this.authService.getAuthStatusListener().
    subscribe(isAuthenticated=>{
      this.userIsAuthenticated=isAuthenticated;
      this.userName=this.authService.getUserName();
      console.log("inside init");
      if(this.userName){
        this.addBotMessage('Hey 🤖 my prestigious member '+ this.userName+ ' nice to see you!');
       } 
    });
  

  
  }

  handleUserMessage(event) {
    console.log(event);
  //  add email address to message so that bot can send email
  
    // const text = event.message + " "+ this.authService.getUserEmail();
    const text = event.message ;
    
    this.addUserMessage(text);

    this.loading = true;
   
    // Make the request 
    this.http.post<any>(
      dialogflowURL,
      {
        email:this.authService.getUserEmail(),
        sessionId: this.sessionId,
        queryInput: {
          text: {
            text,
            languageCode: 'en-US'
          }
          
        }
      }
    )
    .subscribe(res => {
      const { Reply } = res;
      console.log("Bot's res" + res);
      console.log(Reply);
      this.addBotMessage(Reply);
      this.loading = false;
    });
  }

  addUserMessage(text) {
    
    this.messages.push({
      text,
      sender: "you",
      reply: true,
      date: new Date()
    });
  }

  addBotMessage(text) {
    this.messages.push({
      text,
      sender: 'Bot',
      avatar: '/assets/bot.jpeg',
      date: new Date()
    });
  
  }
  clearchat(){
    console.log("clear chat");
    this.messages=[];
  }
}
