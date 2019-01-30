import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-datapuzzle2',
  templateUrl: './datapuzzle2.component.html',
  styleUrls: ['./datapuzzle2.component.css']
})
export class Datapuzzle2Component implements OnInit {

  constructor(private _httpService: HttpService, private _router: Router) { }
  description: String;
  countries: any;
  correctCountry:any = {
    flag:""
  }
  codes=['pa', 'br', 'cl', 'ca', 'bb']
  ind: any;
  ngOnInit() {
    this.ind = Math.floor(Math.random() * Math.floor(5));
    this.getOneCountry(this.codes[this.ind])
    this.description="You find another note from the captain, 'Uh oh, it happened again. This time these flags are from the Americas'"
  }
  getOneCountry(code){
    let obs = this._httpService.getOneCountry(code);
    obs.subscribe(data => {
      console.log(data)
      this.correctCountry = data;
    })
  }
  param(num){
    if(num == this.ind){
      this._router.navigate(['/space/dataroom3'])
    }
    else{
      this.description = "Sorry wrong answer, try again"
    }
  }


  getCountryInfo(region){
    let obs = this._httpService.getCountry(region);
    obs.subscribe(data => {
      console.log(data)
      this.countries = data
    })
  }

}
