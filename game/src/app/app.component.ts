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
  constructor(private _httpService: HttpService, private _router: Router){}
  onClickParam(type){
    if(type == 0){
      this.gamestart = 1;
      // this._router.navigate(['/house/frontroom']);  //put back in when all buttons have been placed
    }
    if(type == 1){
      let user = window.prompt("Please enter your username");
      let observe = this._httpService.getOne(user);
      observe.subscribe(data => {
        this._httpService.user = data;
        var location = data.location;
        this.gamestart = 1;
        this._router.navigate([location])
      })
    }
    if(type == 2){
      let observe = this._httpService.update(this._httpService.user)
      observe.subscribe(data => {
        console.log(data)
      })
    }
  }
}