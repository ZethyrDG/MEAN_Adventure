import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-space',
  templateUrl: './space.component.html',
  styleUrls: ['./space.component.css']
})
export class SpaceComponent implements OnInit {
  constructor(private _httpService: HttpService) { }
  allItems= this._httpService.user.inventory;
  ngOnInit() {
    console.log(this.allItems)
  }

}
