import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-labbookpuzzle',
  templateUrl: './labbookpuzzle.component.html',
  styleUrls: ['./labbookpuzzle.component.css']
})
export class LabbookpuzzleComponent implements OnInit {

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this._httpService.user.progress.labpuzzle1 = true;
  }

}
