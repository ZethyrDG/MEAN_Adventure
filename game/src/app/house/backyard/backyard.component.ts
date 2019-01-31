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
    if(this._httpService.user.progress.savedAlien == false){
      this.description="You step out into the large backyard.  There is a gardening shed in the back. You also notice a feeble glow of strange light from the attic window."
    }
    if(this._httpService.user.progress.savedAlien == true && this._httpService.user.progress.spacedone == false && this._httpService.user.progress.castledone == false){
      this.description="You step out into the large backyard.  There is a gardening shed in the back."
    }
    if(this._httpService.user.progress.savedAlien == false && this._httpService.user.progress.castledone == true){
      this.description = "The wizard falls to the floor, free of his prison. Slowly, he stands up. 'Thank you, young wizard. You've saved me from my imposter, and freed my from his prison. I have no further interest in staying in this place. I sense you are not from this world. Let me return you to your home.' The wizard begins to cast a spell, and you feel yourself being pulled from the castle. Suddenly, you look around, and you're back in your backyard. As you glance behind you, something seems off about the old shed, but you can't quite tell what it might be...That glow in the attic is still there, and it doesn't seem like much time has passed since you were transported here from the basement..."
      this._httpService.user.progress.castledone = false;
    }
    if(this._httpService.user.progress.savedthewizard == false && this._httpService.user.progress.spacedone == true){
      this.description = "After stopping for ice cream, the alien drops you off in your backyard. The glow in the attic is gone, and it's starting to get darker, but your parents still aren't home. You thought you caught a glimpse of something behind you, but as you turn around, there's nothing there but the old shed. You never did find out what was in the basement of this house..."
      this._httpService.user.progress.spacedone = false;
    }
    if(this._httpService.user.progress.savedthewizard == true && this._httpService.user.progress.savedAlien == true && this._httpService.user.progress.castledone == true){
      this.description = "The wizard falls to the floor, free of his prison. Slowly, he stands up. 'Thank you, young wizard. You've saved me from my imposter, and freed my from his prison. I have no further interest in staying in this place. I sense you are not from this world. Let me return you to your home.' The wizard begins to cast a spell, and you feel yourself being pulled from the castle. Suddenly, you look around, and you're back in your backyard. It doesn't seem like much time has passed since you were transported here from the basement. Suddenly, you hear a loud sound coming from inside the old shed."
      this._httpService.user.progress.castledone = false;
    }
    else if(this._httpService.user.progress.savedthewizard == true && this._httpService.user.progress.savedAlien == true && this._httpService.user.progress.spacedone == true){
      this.description = "After stopping for ice cream, the alien drops you off in your backyard. The glow in the attic is gone, and it's starting to get darker, but your parents still aren't home. Suddenly, you hear a loud sound coming from inside the old shed."
      this._httpService.user.progress.spacedone = false;
    }
  }
  param(num){
    if(num==0){
      if(this._httpService.user.inventory.shedkey==false){
        this.description="the shed is locked. You remeber you saw some keys earlier today but can't remember where. They have to be in the house somewhere..."
      }
      else{
        this._router.navigate(['/house/shed'])
      }
    }
  }
}
