import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-hallwaysecret',
  templateUrl: './hallwaysecret.component.html',
  styleUrls: ['./hallwaysecret.component.css']
})
export class HallwaysecretComponent implements OnInit {
  description: String;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.description = "The statue slides out of the way, revealing a secret room. You move inside and, looking around, it seems to be some kind of office area. Many magical objects are scattered around the room. Suddenly, you hit a wall, but there's nothing in the way. Any direction you try to move, you're unable to escape. Symbols appear all around you, and you realize you're trapped."
    
  }
}
