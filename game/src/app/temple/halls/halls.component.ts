import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-halls',
  templateUrl: './halls.component.html',
  styleUrls: ['./halls.component.css']
})
export class HallsComponent implements OnInit {
  description: String;
  constructor(private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {
    if(this._httpService.user.progress.blueflame == false && this._httpService.user.progress.redflame == false){
      this.description = "After opening the door to the temple, you step into the main halls of the temple. Three passages stand out, each marked with a different colored flame. The blue and red passages are open, each marked by its own flame. The purple passage, however, remains shut, two large torches stand on either side, untouched by the fire you know must have been there long ago."
    }
    if(this._httpService.user.inventory.blueflame == true && this._httpService.user.progress.redflame == false){
      this.description = "You've successfully brought the blue flame to the temple halls. As you approach the large torches near the purple passage, the flame seems to be drawing you to the left. You move your blue fire towards the torch on the left. Your torch goes out, and blue flame erupts from the large torch on the floor. It's time to get the red flame."
      this._httpService.user.inventory.blueflame = false;
    }
    if(this._httpService.user.inventory.redflame == true  && this._httpService.user.progress.blueflame == false){
      this.description = "You've successfully brought the red flame to the temple halls. As you approach the large torches near the purple passage, the flame seems to be drawing you to the right. You move your red fire towards the torch on the right. Your torch goes out, and red flame erupts from the large torch on the floor. It's time to get the blue flame."
      this._httpService.user.inventory.redflame = false
    }
    if(this._httpService.user.inventory.blueflame == true && this._httpService.user.progress.redflame == true){
      this.description = "You've successfully brought the blue flame to the temple halls. As you approach the large torches near the purple passage, the flame seems to be drawing you to the left. You move your blue fire towards the torch on the left. Your torch goes out, and blue flame erupts from the large torch on the floor. With both the red and blue torches lit, the door slowly, but loudly, opens."
      this._httpService.user.inventory.blueflame = false;
    }
    if(this._httpService.user.inventory.redflame == true  && this._httpService.user.progress.blueflame == true){
      this.description = "You've successfully brought the red flame to the temple halls. As you approach the large torches near the purple passage, the flame seems to be drawing you to the right. You move your red fire towards the torch on the right. Your torch goes out, and red flame erupts from the large torch on the floor. With both the red and blue torches lit, the door slowly, but loudly, opens."
      this._httpService.user.inventory.redflame = false
    }
  }
  onClick(type){
    if(type == 0){
      if(this._httpService.user.progress.blueflame == false){
        this._router.navigate(['/temple/bluepassage'])
      }
      else{
        this.description = "You've already recovered the blue flame, you have no reason to go through this passage again."
      }
    }
    if(type == 1){
      if(this._httpService.user.progress.redflame == false){
        this._router.navigate(['/temple/redpassage'])
      }
      else{
        this.description = "You've already recovered the red flame, you have no reason to go through this passage again."
      }
    }
    if(type == 2){
      if(this._httpService.user.progress.blueflame == false || this._httpService.user.progress.redflame == false){
        this.description = "The door to the purple passage is shut, and nothing you do can open it. Maybe if you lit both flames, you could unlock the door? You seem to remember the two flames, merging, that guard the door to the treasure."
      }
      else{
        this._router.navigate(['/temple/purplepassage'])
      }
    }
  }
}