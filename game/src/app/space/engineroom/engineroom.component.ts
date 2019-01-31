import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-engineroom',
  templateUrl: './engineroom.component.html',
  styleUrls: ['./engineroom.component.css']
})
export class EngineroomComponent implements OnInit {
  description: String;
  constructor(private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {
    if(this._httpService.user.inventory.fixedpart1==false && this._httpService.user.inventory.fixedpart2==false && this._httpService.user.inventory.fixedpart3==false){
      this.description="You enter a room with a lot of machinery. You see three small machines that are labeled, 'Please Repair and combine'"
    }
    else if(this._httpService.user.inventory.fixedpart1==true && this._httpService.user.inventory.fixedpart2==true && this._httpService.user.inventory.fixedpart3==true){
      this.description="You fixed the three parts! Hurry and put them all together"
    }
    else{
      this.description="Good job! Keep it going!"
    }
  }
  param(num){
    if(num==0){
      if(this._httpService.user.inventory.fixedpart1==true && this._httpService.user.inventory.fixedpart2==true && this._httpService.user.inventory.fixedpart3==true){
        this._router.navigate(['/space/enginerepaired'])
        this._httpService.user.inventory.fixedpart1=false
        this._httpService.user.inventory.fixedpart2=false
        this._httpService.user.inventory.fixedpart3=false
      }
      else{
        this.description="You need to repair all three parts before you combine them!"
      }
    }
    if(num==1){
      if(this._httpService.user.inventory.fixedpart1==true){
        this.description="You have repaired this part already! Try another or combine the repaired parts"
      }
      else{
        this._router.navigate(['/space/fixpartpuzzle1'])
      }
    }
    if(num==2){
      if(this._httpService.user.inventory.fixedpart2==true){
        this.description="You have repaired this part already! Try another or combine the repaired parts"
      }
      else{
        this._router.navigate(['/space/fixpartpuzzle2'])
      }
    }
    if(num==3){
      if(this._httpService.user.inventory.fixedpart3==true){
        this.description="You have repaired this part already! Try another or combine the repaired parts"
      }
      else{
        this._router.navigate(['/space/fixpartpuzzle3'])
      }
    }
  }

}
