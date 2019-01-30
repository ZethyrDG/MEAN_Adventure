import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-hallwayescape',
  templateUrl: './hallwayescape.component.html',
  styleUrls: ['./hallwayescape.component.css']
})
export class HallwayescapeComponent implements OnInit {
  description: String;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.description = "As you finally escape from your prison, the figure you saw in the great hall steps out of the shadows. 'How did you escape my trap?!' He asks, in a far more menacing tone than you remember. 'No matter, you won't get be able to defeat me...' Suddenly, he attacks you...WITH MATH PROBLEMS!"
    
  }
}
