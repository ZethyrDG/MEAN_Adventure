import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-controlcenter',
  templateUrl: './controlcenter.component.html',
  styleUrls: ['./controlcenter.component.css']
})
export class ControlcenterComponent implements OnInit {
  description: String;
  constructor(private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {
    if(this._httpService.user.progress.navigation == false && this._httpService.user.progress.engine == false && this._httpService.user.progress.data == false){
      this.description = "You step out into an amazing control center of an alien space ship. A small green alien comes up to you and says in an excited voice, 'You solved the door puzzle! you must be very smart! please help me, I am stranded after collecting data for my people so we can better understand you and live in peace. Please use your great intellegence to help me get home. The navigation is broken, some engine parts need repairing, and the data I collected needs sorting. I'll be in my captain's quarters. come get me when you are done! Thank you!'"
    }
    if(this._httpService.user.progress.navigation == true && this._httpService.user.progress.engine == true && this._httpService.user.progress.data == true){
      this.description = "You repaired everything! Hurry go tell the captain, he'll be so excited!"
    }
    else{
      this.description = "You are doing it! keep working!"
    }
    
  }
  param(num){
    if(num==0){
      if(this._httpService.user.progress.navigation == false && this._httpService.user.progress.engine == false && this._httpService.user.progress.data == false){
        this.description="You knock on the door and the captain responds, 'Thank you again for helping. I'm busy doing other repairs in here. Come back when you finish with Navigation, Engine, and Data!"
      }
      else if(this._httpService.user.progress.navigation == true && this._httpService.user.progress.engine == false && this._httpService.user.progress.data == false){
        this.description="Two more to go! Engine and Data! You are doing Great!"
      }
      else if(this._httpService.user.progress.navigation == false && this._httpService.user.progress.engine == true && this._httpService.user.progress.data == false){
        this.description="Two more to go! Navigation and Data! You are doing Great!"
      }
      else if(this._httpService.user.progress.navigation == false && this._httpService.user.progress.engine == false && this._httpService.user.progress.data == true){
        this.description="Two more to go! Engine and Navigation! You are doing Great!"
      }
      else if(this._httpService.user.progress.navigation == false){
        this.description="You are amazing! Just one more to do! Please fix the Navigation!"
      }
      else if(this._httpService.user.progress.engine == false){
        this.description="You are amazing! Just one more to do! Please repair the Engine!"
      }
      else if(this._httpService.user.progress.data == false){
        this.description="You are amazing! Just one more to do! Please Sort the Data!"
      }
      else{
        this._router.navigate(['/space/captainsroom'])
      }
    }
    if(num==1){
      if(this._httpService.user.progress.navigation == false){
        this._router.navigate(['/space/navigationroom'])
      }
      else{
        this.description="You don't need to go here, you've already Fixed the Navigation!"
      }
    }
    if(num==2){
      if(this._httpService.user.progress.engine == false){
        this._router.navigate(['/space/engineroom'])
      }
      else{
        this.description="You don't need to go here, you've already repaired the Engine!"
      }
    }
    if(num==3){
      if(this._httpService.user.progress.data == false){
        this._router.navigate(['/space/dataroom1'])
      }
      else{
        this.description="You don't need to go here, you've already sorted the data!"
      }
    }
  }

}
