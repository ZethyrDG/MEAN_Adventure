import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-enginerepaired',
  templateUrl: './enginerepaired.component.html',
  styleUrls: ['./enginerepaired.component.css']
})
export class EnginerepairedComponent implements OnInit {
  description: String;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.description = "You repaired the engine! Everything looks to be working as it should, at least you think it does"
    this._httpService.user.progress.engine = true;
  }

}
