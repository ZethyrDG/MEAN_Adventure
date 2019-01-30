import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-dungeonroom2',
  templateUrl: './dungeonroom2.component.html',
  styleUrls: ['./dungeonroom2.component.css']
})
export class Dungeonroom2Component implements OnInit {
  description: String;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.description = "As you solve the puzzle and move into the next room, you hear the familiar sound of the door slamming behind you. Nothing to do but continue on."
    
  }
}
