import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-navigationpuzzle1',
  templateUrl: './navigationpuzzle1.component.html',
  styleUrls: ['./navigationpuzzle1.component.css']
})
export class Navigationpuzzle1Component implements OnInit {

  constructor(private _httpService: HttpService) { }
  countries: any;
  ngOnInit() {
  }
  getCountryInfo(region){
    let obs = this._httpService.getCountry(region);
    obs.subscribe(data => {
      console.log(data)
      this.countries = data
    })
  }

}
