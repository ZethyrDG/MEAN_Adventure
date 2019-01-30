import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-navigationroom2',
  templateUrl: './navigationroom2.component.html',
  styleUrls: ['./navigationroom2.component.css']
})
export class Navigationroom2Component implements OnInit {
  description: String;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.description="You continue on and in the next room see another warning message. 'Door to go even further is currently unavailable,please resolve error to move forward'"
  }

}
