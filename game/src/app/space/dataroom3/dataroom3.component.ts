import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-dataroom3',
  templateUrl: './dataroom3.component.html',
  styleUrls: ['./dataroom3.component.css']
})
export class Dataroom3Component implements OnInit {
  description: String;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.description="The first two screens are now both running with no errors.  The third and final screen has now begun flashing 'DATA CORRUPTED'"
  }

}
