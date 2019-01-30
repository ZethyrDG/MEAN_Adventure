import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-shed',
  templateUrl: './shed.component.html',
  styleUrls: ['./shed.component.css']
})
export class ShedComponent implements OnInit {
  description: String;
  switch: Boolean = true;
  switch1: Boolean = false;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    if(this._httpService.user.progress.savedAlien == false || this._httpService.user.progress.savedthewizard == false){
      this.description = "You step in the small dusty shed. There are a lot of gardening tools, including a long stick with a hook on the end. You see a word etched into the wall, 'Alohamora'"
      this._httpService.user.progress.shed = true;
    }
    if(this._httpService.user.inventory.hook == true){
      this.switch1 = true;
    }
    if(this._httpService.user.progress.savedAlien == true && this._httpService.user.progress.savedthewizard == true){
      this.description = "One of the large shelves inside the shed has fallen, revealing a small trapdoor! Moving the fallen junk around the trapdoor, you open it. There's a very tight staircase leading down..."
      this.switch = false;
    }
  }
  param(num){
    if(num==0){
      this.description="You grab the hook and think this might be useful later."
      this._httpService.user.inventory.hook = true;
      this.switch1 = true;
    }
  }
}
