import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hallwaywand',
  templateUrl: './hallwaywand.component.html',
  styleUrls: ['./hallwaywand.component.css']
})
export class HallwaywandComponent implements OnInit {
  description: String;
  switch: boolean = false;
  switch1: boolean = true;
  switch2: boolean = true;
  constructor(private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {
    if(this._httpService.user.inventory.wand == false){
      this.description = "Having defeated the evil math wizard, you make for the far door. As you step through the doorway, you're greeted by a man, trapped in what looks like a giant glowing bubble. 'Please, you must free me. I am the true wizard of this castle. That imposter trapped me, and I can only be freed with the help of a potion of unsealing, and a spell from the forbidden book hidden in the dungeon of this castle. Please, take the false wizard's wand and unseal the doors to the potion lab and the dungeon, retrieve that which I seek, and return to free me!'"
    }
    if(this._httpService.user.inventory.wand == true){
      this.description = "You return to the wizard's room, where he is still imprisoned. You still need to gather the items to free him!"
      this.switch = true;
      this.switch1 = false;
    }
    if(this._httpService.user.inventory.wand == true && this._httpService.user.inventory.potion == true && this._httpService.user.inventory.spellbook == true){
      this.description = "You have everything you need to save the wizard!"
      this.switch = true;
      this.switch1 = false;
      this.switch2 = false;
    }
  }
  onClick(type){
    if(type == 0){
    this._httpService.user.inventory.wand = true;
    this._router.navigate(['/castle/mainroom'])
    }
    if(type == 1){
      this._httpService.user.progress.savedthewizard = true;
      this._httpService.user.progress.castledone = true;
      this._router.navigate(['/house/backyard'])
      }
  }
}