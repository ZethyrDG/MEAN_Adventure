import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-dungeonroom1',
  templateUrl: './dungeonroom1.component.html',
  styleUrls: ['./dungeonroom1.component.css']
})
export class Dungeonroom1Component implements OnInit {
  description: String;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.description = "The wand reacts violently as it dispels the seal on the door. As you quickly move through the doorway, you feel as if something isn't right. Moving a little further into the room, the door suddenly slams behind you. Nothing you try will open the door. The only way to go now, is forward."
    this._httpService.user.progress.dungeon == true;
  }
}