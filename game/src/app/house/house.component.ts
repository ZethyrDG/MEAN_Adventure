import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.css']
})
export class HouseComponent implements OnInit {

  constructor(private _httpService: HttpService) { }
  allItems= this._httpService.user.inventory;
  ngOnInit() {
    console.log(this.allItems)
  }
  
  
}
