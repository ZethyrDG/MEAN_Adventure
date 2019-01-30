import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-templeentrance',
  templateUrl: './templeentrance.component.html',
  styleUrls: ['./templeentrance.component.css']
})
export class TempleentranceComponent implements OnInit {
  description: String;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.description = "You finally reach the bottom of the massive staircase, which leads out into an even more massive underground cavern. It's dark, but you can clearly see a huge structure not far from you. It looks to be some kind of temple...You can just make out what looks to be the entrance from this end of the cavern. As you approach, one of the walls depicts what you think is a treasure in the innermost depths of the temple, guarded by two flames that become one. You can't find any way into the temple from here, but the door seems to have some writing on it..."
    
  }
}