import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-purpleair',
  templateUrl: './purpleair.component.html',
  styleUrls: ['./purpleair.component.css']
})
export class PurpleairComponent implements OnInit {
  description: String;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.description = "The fountains form a kind of water bridge. Though wary, you attempt to climb the stairs made of nothing but flowing water. They seem to support your weight, so you climb higher. Reaching the door, you enter the next room. Finally, this room seems completely normal, with no sign of danger, and only a closed door blocking your path. As you make your way to the door, the path behind you closes, and you start to hear the sound of air flowing out of the chamber. Better hurry..."
    
  }
}