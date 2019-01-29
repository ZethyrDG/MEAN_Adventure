import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upstairs-landing',
  templateUrl: './upstairs-landing.component.html',
  styleUrls: ['./upstairs-landing.component.css']
})
export class UpstairsLandingComponent implements OnInit {
  description: String;
  constructor(private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {
      this.description = "You step onto the upstairs landing.  Many rooms to choose from to explore.  You also notice a door to the Attic on the ceiling.  It is high up and out of reach but you hear a faint humming from it."
    
  }
  param(num){
    if(num == 0){
      if(this._httpService.user.inventory.hook==true && this._httpService.user.inventory.ladder ==true){
        this._router.navigate(['/house/attic'])
      }
      else if(this._httpService.user.inventory.hook==true){
        this.description="You stretch to reach the Attic handle with the hook but just barely still can't reach"
      }
      else if(this._httpService.user.inventory.ladder==true){
        this.description="You step on the ladder to reach the Attic door but it is still just out of reach."
      }
      else{
        this.description="the attic door is way to high for you, maybe you can find something to help you reach"
      }
    }
  }
}
