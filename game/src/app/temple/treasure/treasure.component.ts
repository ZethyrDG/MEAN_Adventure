import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-treasure',
  templateUrl: './treasure.component.html',
  styleUrls: ['./treasure.component.css']
})
export class TreasureComponent implements OnInit {
  description: String;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.description = "You've finally arrived. This is it, the treasure room. You look around, but to your dismay, you don't see any treasure. In fact, this room looks very simiiar to the red and blue shrines you saw before. The only difference, is this time, it's a giant purple flame."
    
  }
}