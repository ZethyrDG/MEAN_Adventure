import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lab',
  templateUrl: './lab.component.html',
  styleUrls: ['./lab.component.css']
})
export class LabComponent implements OnInit {
  description: String;
  switch: boolean = true;
  switch1: boolean = false;
  switch2: boolean = false;
  switch3: boolean = false;
  imgSwap: boolean = false;
  constructor(private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {
    if(this._httpService.user.progress.labpuzzle1 == true){
      this.switch1 = true;
    }
    if(this._httpService.user.progress.labpuzzle2 == true){
      this.switch2 = true;
      this.imgSwap = true;
    }
    if(this._httpService.user.progress.labpuzzle3 == true){
      this.switch3 = true;
    }
    if(this._httpService.user.progress.labpuzzle1 == true && this._httpService.user.progress.labpuzzle2 == true && this._httpService.user.progress.labpuzzle3 == true && this._httpService.user.inventory.potion == false){
      this.description = "You have everything you need to brew the potion of unsealing! Time to combine them all!"
      this.switch = false;
      this.imgSwap = true;
    }
    if(this._httpService.user.inventory.potion == true && this.switch == true){
      this.description = "You've brewed the potion of unsealing, and have no further need of anything in this room."
    }
    if(this._httpService.user.progress.lab == false){
      this.description = "The wand reacts to the seal on the door, unlocking it. Stepping into the room, you see ingredients and recipes for potions everywhere. It looks like you'll have to search the room for what you need."
      this._httpService.user.progress.lab = true;
    }
    else if(this._httpService.user.progress.lab == true && this.switch == true && this._httpService.user.inventory.potion == false){
      this.description = "It doesn't look like you have enough ingredients to brew the potion of unsealing. Keep looking around."
    }
  }
  onClick(type){
    if(type == 0){
      this._router.navigate(['/castle/labcombinepuzzle'])
    }
  }
}
