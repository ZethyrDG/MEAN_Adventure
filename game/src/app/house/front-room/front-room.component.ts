import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-front-room',
  templateUrl: './front-room.component.html',
  styleUrls: ['./front-room.component.css']
})
export class FrontRoomComponent implements OnInit {
  description: String;
  constructor(private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {
    if(this._httpService.user.progress.frontroom == false){
      this.description = "Welcome to your new house! Your parents are out and asked you to start unpacking your room. Better get started!"
      this._httpService.user.progress.frontroom = true
    }
    else{
      this.description = "Back in the front room. There are many rooms to choose from, or you could go upstairs"
    }
    
  }
  param(num){
    if(num==0){
      if(this._httpService.user.inventory.basementkey == true){
        this._router.navigate(['/house/basement'])
      }
      else{
        this.description = "the Basement is locked"
      }
    }
  }

}
