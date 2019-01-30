import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {
  description: String;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    
      this.description = "This is a large room filled wall to wall with books. There is a stack of a few books on the table that look interesting"
    
    
  }
  param(num){
    if(num==0){
      if(this._httpService.user.progress.knight == true && this._httpService.user.inventory.basementkey == false){
        this.description = "You open the book titled 'Medieval Architecture', and out falls a key. Its the Basement key!"
        this._httpService.user.inventory.basementkey = true;
      }
      else{
        this.description = "This book looks boring"
      }
    }
    if(num==1){
      if(this._httpService.user.inventory.aliendevice == true){
        this.description="You find a translation: 'This teleporter's energy source is too dirty, please clean with H2O'"
        this._httpService.user.progress.translate = true;
      }
      else{
        this.description="This book is full of different languages. Maybe you could read it later when you have free time."
      }
    }
  }
  

}
