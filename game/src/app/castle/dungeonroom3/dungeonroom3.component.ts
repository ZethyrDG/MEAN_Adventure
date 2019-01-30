import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-dungeonroom3',
  templateUrl: './dungeonroom3.component.html',
  styleUrls: ['./dungeonroom3.component.css']
})
export class Dungeonroom3Component implements OnInit {
  description: String;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.description = "Once more, the door slams behind you. This time, you're not greeted by more doors, but by a large book, enclosed inside a magical barrier."
    
  }
}
