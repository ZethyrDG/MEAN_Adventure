import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-dataroom2',
  templateUrl: './dataroom2.component.html',
  styleUrls: ['./dataroom2.component.css']
})
export class Dataroom2Component implements OnInit {
  description: String;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.description="The screen you were just working on is now fully functional.  The middel screen is now flashing 'DATA CORRUPTED'"
  }

}
