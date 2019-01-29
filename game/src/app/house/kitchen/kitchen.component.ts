import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.css']
})
export class KitchenComponent implements OnInit {
  description: String;
  constructor(private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {
    this.description="Its a kitchen"
  }
  param(num){
    if(num==0){
      if(this._httpService.user.progress.translate==true){
        this._router.navigate(['/space/spaceroom'])
      }
      else{
        this.description="You washed your hands, good job. Hygiene is important!"
      }
    }
  }
}
