import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-staircase',
  templateUrl: './staircase.component.html',
  styleUrls: ['./staircase.component.css']
})
export class StaircaseComponent implements OnInit {
  description: String;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.description = "As you jump into the trapdoor and descend the staircase, it seems to be getting larger the further down the you go. It just keeps going..."
    
  }
}