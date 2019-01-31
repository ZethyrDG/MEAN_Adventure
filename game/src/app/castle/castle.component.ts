import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-castle',
  templateUrl: './castle.component.html',
  styleUrls: ['./castle.component.css']
})
export class CastleComponent implements OnInit {

  constructor(private _httpService: HttpService) { }
  allItems= this._httpService.user.inventory;
  ngOnInit() {
    console.log(this.allItems)
  }

}
