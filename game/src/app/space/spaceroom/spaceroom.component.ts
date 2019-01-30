import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-spaceroom',
  templateUrl: './spaceroom.component.html',
  styleUrls: ['./spaceroom.component.css']
})
export class SpaceroomComponent implements OnInit {
  description: String;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.description="Immediately after cleaning the power sauce in the sink, there was a bright light. Now you are standing in a metalic room with one window and one door. The window shows a very starry black sky"
  }
  param(num){
    if(num==0){
      this.description="You look out the window and are shocked to see the earth! Where are you?!?!"
    }
  }
}
