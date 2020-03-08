import { Component,OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';
import {ChatbotComponent} from '../chatbot/chatbot.component'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private authListenerSubs: Subscription;
  userIsAuthenticated=false;
  title = 'public'; 
  constructor(private authService: AuthService,public chatbot:ChatbotComponent){}
  ngOnInit(){
    this.authListenerSubs=this.authService.getAuthStatusListener().subscribe(isAuthenticated=>{
      this.userIsAuthenticated=isAuthenticated;
    });
  }
  ngOnDestroy(){
    this.authListenerSubs.unsubscribe();
  }
  onLogOut()
  {
    this.chatbot.clearchat();
    this.authService.logOut();
    
  }
}
