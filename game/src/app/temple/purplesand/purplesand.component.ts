import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-purplesand',
  templateUrl: './purplesand.component.html',
  styleUrls: ['./purplesand.component.css']
})
export class PurplesandComponent implements OnInit {
  description: String;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.description = "You make your way into the next room. This time, the floor is covered in sand, but it doesn't look like ordinary sand. This is quicksand! You'll need to find a way across. This time, a voice rings out, demanding an answer..."
    
  }
}