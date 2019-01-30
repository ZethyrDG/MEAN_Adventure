import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-dataroom1',
  templateUrl: './dataroom1.component.html',
  styleUrls: ['./dataroom1.component.css']
})
export class Dataroom1Component implements OnInit {
  description: String;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.description="You walk into the room labeled DATA. There are three large computer screens. Two are black and one is flashing 'DATA CORRUPTED'"
  }

}
