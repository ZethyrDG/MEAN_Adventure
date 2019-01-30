import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-bluepassage',
  templateUrl: './bluepassage.component.html',
  styleUrls: ['./bluepassage.component.css']
})
export class BluepassageComponent implements OnInit {
  description: String;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.description = "The passageway is lined with blue flames, all much too high to reach. There's no way to use it, except to light your way. There's nothing to do but continue onward."
    
  }
}