import { Component } from '@angular/core';
import { HttpService } from './http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MEAN Adventure';
  gamestart = 0;
  usertaken = 0;
  constructor(private _httpService: HttpService, private _router: Router){}
  onClickParam(type){
    if(type == 0){
      let user = window.prompt("Please enter a new username")
      this._httpService.user.username = user
      let observe = this._httpService.create(this._httpService.user)
      observe.subscribe(data => {
        if(data.errmsg != undefined){
          this.usertaken = 1;
          this._router.navigate(['/'])
        }
        else{
          this.usertaken = 0;
          console.log(data)
          this.gamestart = 1;
          this._httpService.user = data
          this._router.navigate(['/house/frontroom']);  //put back in when all buttons have been placed
        }
      })
    }
    if(type == 1){
      let user = window.prompt("Please enter your username");
      let observe = this._httpService.getOne(user);
      observe.subscribe(data => {
        this.usertaken = 0;
        this._httpService.user = data[0];
        var location = data[0].location;
        this.gamestart = 1;
        this._router.navigate([location])
      })
    }
    if(type == 2){
      this._httpService.user.location = this._router.url
      let observe = this._httpService.update(this._httpService.user)
      observe.subscribe(data => {
        console.log(data)
      })
    }
  }
}