import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-redfire',
  templateUrl: './redfire.component.html',
  styleUrls: ['./redfire.component.css']
})
export class RedfireComponent implements OnInit {
  description: String;
  switch: Boolean = false;
  switch1: Boolean = true;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    if(this._httpService.user.inventory.redflame == false){
      this.description = "Reaching the end of this passage, you enter a room, covered in square tiles, each with a hole in it. It looks ominous, but nothing else is happening. Nothing to do but cross the room to the door on the other side."
    }
    else{
      this.description = "You've made it past the torrential winds without putting out your flame. As you step into the room, the tiles explode in giant flames. There's no way across, but you see a puzzle on the floor..."
      this.switch = true;
      this.switch1 = false;
    }
  }
}