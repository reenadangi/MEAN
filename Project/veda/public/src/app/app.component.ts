import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
 // for image slider
  
  
})
export class AppComponent {
  title = 'public';
  isShow = true;
 
  toggleDisplay() {
    this.isShow = !this.isShow;
  }
  ngOnInit() {
   
    this.isShow=true;
    
  }
  
  

}
