import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-parlor',
  templateUrl: './parlor.component.html',
  styleUrls: ['./parlor.component.css']
})
export class ParlorComponent implements OnInit {
  description: String;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    if(this._httpService.user.progress.myBedroom == false || this._httpService.user.progress.knight == true){
      this.description = "The Parlor is a very fancy looking room.  Not much to do in here. Try not to break anything."
    }
    else if(this._httpService.user.progress.myBedroom == true && this._httpService.user.progress.shed == false){
      this.description = "You see a small suit of armor statue. You do not know what the password is but it seems the knight was recently covered in dirt. Does he like gardening?"
    }
    else if(this._httpService.user.progress.shed == true){
      this.description = "You pick up the suit of armor figurine and say 'Alohamora.  He shakes in your hand before raising his sword and saying 'Medieval Architecture!' You think that doesnt make much sense, maybe you should do some research"
      this._httpService.user.progress.knight = true;
    }
  }

}
