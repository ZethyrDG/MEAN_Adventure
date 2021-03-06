import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-garage',
  templateUrl: './garage.component.html',
  styleUrls: ['./garage.component.css']
})
export class GarageComponent implements OnInit {
  description: String;
  imgSwap: number = 0;
  constructor(private _httpService: HttpService) { }

  ngOnInit() { 
      this.description = "You enter the garage, its filled with tools, knick knacks, and a set of small ladders.  On the far wall you see some keys hanging, the basement key is missing"
      if(this._httpService.user.inventory.ladder==true && this._httpService.user.inventory.shedkey==true){
        this.imgSwap = 3;
      }
      if(this._httpService.user.inventory.ladder==false && this._httpService.user.inventory.shedkey==true){
        this.imgSwap = 1;
      }
      if(this._httpService.user.inventory.ladder==true && this._httpService.user.inventory.shedkey==false){
        this.imgSwap = 2;
      }
  }
  param(num){
    if(num==0){
      if(this._httpService.user.inventory.ladder==false){
        this.description="You find a small step ladder that isnt to bulky so you decide to carry it"
        this._httpService.user.inventory.ladder=true;
        if(this._httpService.user.inventory.shedkey==true){
          this.imgSwap = 3;
        }
        else{
          this.imgSwap = 2;
        }
      }
      else{
        this.description="You can't carry any more ladders! Don't be greedy"
      }
      
    }
    if(num==1){
      if(this._httpService.user.inventory.shedkey==false){
        this.description="You look over the keys, the basement key is missing but see there is a key labeled shed key and grab it just in case"
        this._httpService.user.inventory.shedkey=true;
        if(this._httpService.user.inventory.ladder==true){
          this.imgSwap = 3;
        }
        else{
          this.imgSwap = 1;
        }
      }
      else{
        this.description="You have no need for any other key here."
      }
    }
  }
}
