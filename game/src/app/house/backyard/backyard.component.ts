import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-backyard',
  templateUrl: './backyard.component.html',
  styleUrls: ['./backyard.component.css']
})
export class BackyardComponent implements OnInit {
  description: String;
  constructor(private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {
    this.description="You step out into the large backyard.  There is a gardening shed in the back. You also notice a feeble glow of strange light from the attic window."
    
  }
  param(num){
    if(num==0){
      if(this._httpService.user.inventory.shedkey==false){
        this.description="the shed is locked"
      }
      else{
        this._router.navigate(['/house/shed'])
      }
    }
  }
}
