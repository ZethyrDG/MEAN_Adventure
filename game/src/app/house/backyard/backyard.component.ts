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
    if(this._httpService.user.progress.savedthewizard == false){
    this.description="You step out into the large backyard.  There is a gardening shed in the back. You also notice a feeble glow of strange light from the attic window."
    }
    if(this._httpService.user.progress.savedthewizard == true && this._httpService.user.progress.savedAlien == false){
      this.description = "The wizard falls to the floor, free of his prison. Slowly, he stands up. 'Thank you, young wizard. You've saved me from my imposter, and freed my from his prison. I have no further interest in staying in this place. I sense you are not from this world. Let me return you to your home.' The wizard begins to cast a spell, and you feel yourself being pulled from the castle. Suddenly, you look around, and you're back in your backyard. Something in the backyard seems different than the last time you were here, but you can't quite put your finger on what that might be...That glow in the attic is still there, and it doesn't seem like much time has passed since you were transported here from the basement..."
    }
    if(this._httpService.user.progress.savedthewizard == false && this._httpService.user.progress.savedAlien == true){
    }
    if(this._httpService.user.progress.savedthewizard == true && this._httpService.user.progress.savedAlien == true){
    }
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
