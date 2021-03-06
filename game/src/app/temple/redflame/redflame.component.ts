import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-redflame',
  templateUrl: './redflame.component.html',
  styleUrls: ['./redflame.component.css']
})
export class RedflameComponent implements OnInit {
  description: String;
  switch: Boolean = true;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.description = "You enter the next room, and are greeted by a temple, leading up to a shrine, with a giant red flame in the center. This time, you can reach it, and there are unlit torches lining the walls around the shrine."
    
  }
  onClick(type){
    if(type == 0){
      if(this._httpService.user.inventory.redflame == false){
        this.description = "You grab the torch and set it ablaze with red fire. Finally, you can bring it back to the temple halls."
        this._httpService.user.inventory.redflame = true;
        this._httpService.user.progress.redflame = true;
        this.switch = false;
      }
      else{
        this.description = "You're already holding the fire, get moving to the temple halls!"
      }
    }
  }
}