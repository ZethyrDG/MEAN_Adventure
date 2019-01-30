import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';


@Component({
  selector: 'app-spaceroompuzzle',
  templateUrl: './spaceroompuzzle.component.html',
  styleUrls: ['./spaceroompuzzle.component.css']
})
export class SpaceroompuzzleComponent implements OnInit {
  description: String;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.description="It looks like you must solve this before the door unlocks"
    
  }

}
