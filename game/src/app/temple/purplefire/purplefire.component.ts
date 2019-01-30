import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-purplefire',
  templateUrl: './purplefire.component.html',
  styleUrls: ['./purplefire.component.css']
})
export class PurplefireComponent implements OnInit {
  description: String;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.description = "You enter a room, that you could only describe as a fire wall. There is quite literally, a wall of purple flame barring your passage. You can make out patterns in the flame..."
    
  }
}