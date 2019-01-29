import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-attic',
  templateUrl: './attic.component.html',
  styleUrls: ['./attic.component.css']
})
export class AtticComponent implements OnInit {
  description: String;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.description = "the Attic is a cramped dusty room. You see the source of that weird light from earlier. It is a very strange looking machine the size of a brick."
    
  }
  param(num){
    if(num==0){
      this.description = "You pick up the Device which ejects a marble sized sphere and says a message you cannot understand. Maybe you could research foreign languages?"
      this._httpService.user.inventory.aliendevice = true;
    }
  }
}
