import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-datapuzzle1',
  templateUrl: './datapuzzle1.component.html',
  styleUrls: ['./datapuzzle1.component.css']
})
export class Datapuzzle1Component implements OnInit {

  constructor(private _httpService: HttpService, private _router: Router) { }
  description: String;
  countries: any;
  correctCountry:any = {
    flag:""
  }
  codes=['is', 'dk', 'de', 'es', 'ie']
  ind: any;
  ngOnInit() {
    this.ind = Math.floor(Math.random() * Math.floor(5));
    this.getOneCountry(this.codes[this.ind])
    this.description="A note from the captain reads, 'Oops, I mixed up some of these flags. Please tell me which country this flag belongs to!'"
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
      this._router.navigate(['/space/dataroom2'])
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
