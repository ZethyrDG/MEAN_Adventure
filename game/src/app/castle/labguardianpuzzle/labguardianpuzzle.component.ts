import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-labguardianpuzzle',
  templateUrl: './labguardianpuzzle.component.html',
  styleUrls: ['./labguardianpuzzle.component.css']
})
export class LabguardianpuzzleComponent implements OnInit {

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this._httpService.user.progress.labpuzzle2 = true;
  }

}