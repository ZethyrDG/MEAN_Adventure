import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-basement',
  templateUrl: './basement.component.html',
  styleUrls: ['./basement.component.css']
})
export class BasementComponent implements OnInit {
  description: String;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.description = "You finally made it into the mysterious basement.  It looks failry normal except for the stone archway that is glowing.  Should you walk through it?"
    
  }

}
