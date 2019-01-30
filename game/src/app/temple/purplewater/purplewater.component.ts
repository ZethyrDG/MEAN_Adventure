import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-purplewater',
  templateUrl: './purplewater.component.html',
  styleUrls: ['./purplewater.component.css']
})
export class PurplewaterComponent implements OnInit {
  description: String;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.description = "The sand hardens, and you walk across the room to the next door. In the next room, you can hear water. As you enter, you see giant fountains. The door is above you, with seemingly no way to reach it. The ominous voice speaks once again..."
    
  }
}