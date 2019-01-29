import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-shed',
  templateUrl: './shed.component.html',
  styleUrls: ['./shed.component.css']
})
export class ShedComponent implements OnInit {
  description: String;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    
      this.description = "You step in the small dusty shed. There are a lot of gardening tools, including a long stick with a hook on the end. You see a word etched into the wall, 'Alohamora'"
      this._httpService.user.progress.shed = true;
      this._httpService.user.inventory.hook = true;
  }
  param(num){
    if(num==0){
      this.description="You grab the hook and think this might be useful later."
      this._httpService.user.inventory.hook = true;
    }
  }
}
