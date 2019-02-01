import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mainroom',
  templateUrl: './mainroom.component.html',
  styleUrls: ['./mainroom.component.css']
})
export class MainroomComponent implements OnInit {
  description: String;
  switch: boolean = false;
  switch1: boolean = false;
  switch2: boolean = false;
  switch3: boolean = true;
  imgSwap: Boolean = false;
  constructor(private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {
    if(this._httpService.user.progress.mainroom == true && this._httpService.user.inventory.wand == false){
      this.description = "You've returned to the great hall."
      this.switch = true
      this.imgSwap = true
    }
    if(this._httpService.user.progress.mainroom == false){
      this.description = "You've successfully opened the door and escaped the tower! Heading downstairs and into what could only be described as a great hall, you are greeted by a partially faded figure that beckons you over."
      this._httpService.user.progress.mainroom = true;
    }
    if(this._httpService.user.inventory.wand == true && this._httpService.user.progress.gotwand == true){
      this.description = "You've returned to the great hall."
      this.switch = true
      this.imgSwap = true
      this.switch3 = false;
      this.switch2 = true;
    }
    if(this._httpService.user.inventory.wand == true && this._httpService.user.progress.gotwand == false){
      this.description = "After picking up the wand, you go through the secret door, down the hallway, and end up back in the main hall"
      this.switch = true
      this.imgSwap = true
      this.switch3 = false;
      this.switch2 = true;
      this._httpService.user.progress.gotwand = true
    }
    if(this._httpService.user.progress.dungeon == true){
      this.switch1 == true;
      this.imgSwap = true
    }
  }
  onClick(type){
    if(type == 0){
      this.description = "'Young human, I don't know how you came here, but you have managed to escape the tower, and may have what it takes to free me from my prison. Please, head down the hallway and solve the puzzle to open the door to my prison.' He then beckons you towards a dark hallway."
      this.switch = true
    }
    if(type == 1){
      if(this._httpService.user.inventory.wand == false){
        this.description = "As hard as you try, you can't open the door to the dungeon. It seems to be magically sealed."
      }
      if(this._httpService.user.inventory.spellbook == true){
        this.description = "The door doesn't seem to budge. The book's power must have sealed the dungeon off completely."
      }
      if(this._httpService.user.inventory.spellbook == false && this._httpService.user.inventory.wand == true){
        this._router.navigate(['/castle/dungeonroom1'])
      }
    }
    if(type == 2){
      if(this._httpService.user.inventory.wand == false){
        this.description = "As hard as you try, you can't open the door to the potion lab. It seems to be magically sealed."
      }
      else{
        this._router.navigate(['/castle/lab'])
      }
    }
  }
}
