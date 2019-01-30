import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fixpartpuzzle1',
  templateUrl: './fixpartpuzzle1.component.html',
  styleUrls: ['./fixpartpuzzle1.component.css']
})
export class Fixpartpuzzle1Component implements OnInit {
  description: String;
  constructor(private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {
    this.description="Please repair"
  }
  param(num){
    if(num==0){
      this._httpService.user.inventory.fixedpart1=true;
      this._router.navigate(['/space/engineroom'])
    }
  }
}
