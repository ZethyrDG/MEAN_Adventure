import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-lablockpuzzle',
  templateUrl: './lablockpuzzle.component.html',
  styleUrls: ['./lablockpuzzle.component.css']
})
export class LablockpuzzleComponent implements OnInit {

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this._httpService.user.progress.labpuzzle3 = true;
  }

}
