import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-purplepassage',
  templateUrl: './purplepassage.component.html',
  styleUrls: ['./purplepassage.component.css']
})
export class PurplepassageComponent implements OnInit {
  description: String;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.description = "You move through the purple passage. Purple flames, clearly formed of both red and blue, line the passageway."
    
  }
}