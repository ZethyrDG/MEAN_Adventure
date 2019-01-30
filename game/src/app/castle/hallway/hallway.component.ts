import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-hallway',
  templateUrl: './hallway.component.html',
  styleUrls: ['./hallway.component.css']
})
export class HallwayComponent implements OnInit {
  description: String;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.description = "As you move down the hallway, you see a suspicious looking statue that looks to have been moved in the past."
    
  }
}
