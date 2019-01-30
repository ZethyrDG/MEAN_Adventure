import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-navigationroom3',
  templateUrl: './navigationroom3.component.html',
  styleUrls: ['./navigationroom3.component.css']
})
export class Navigationroom3Component implements OnInit {
  description: String;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.description="This third room looks identical to the first two rooms and has yet another error message, 'Door to final navigation room is currently unavailable,please resolve error to move forward'"
  }

}
