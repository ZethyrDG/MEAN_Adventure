import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-youwin',
  templateUrl: './youwin.component.html',
  styleUrls: ['./youwin.component.css']
})
export class YouwinComponent implements OnInit {
  description: String;
  victorytext: String;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.description = "Suddenly, you realize you're in the basement of your house, and everything seems normal. You can hear your parents in the house above you."
    this.victorytext = "Congratulations, you've completed the MEAN Adventure! What was the treasure, you ask? The knowledge you gained along the way! Well done!"
  }
}