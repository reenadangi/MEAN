import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  public imagesUrl;
  constructor() { }

  ngOnInit() {
    this.imagesUrl = ['IMAGE_URL1.jpg', 'IMAGE_URL2.jpg', 'IMAGE_URL3.jpg'];
  }

}
