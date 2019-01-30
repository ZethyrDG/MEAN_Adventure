import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-bluebridge',
  templateUrl: './bluebridge.component.html',
  styleUrls: ['./bluebridge.component.css']
})
export class BluebridgeComponent implements OnInit {
  description: String;
  switch: Boolean = false;
  switch1: Boolean = true;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    if(this._httpService.user.inventory.blueflame == false){
      this.description = "As you continue along the passageway, it opens into a large room, covered in water. The blue light from the fires that surround the room flickers off the surface. There's a bridge across the water, just wide enough to cross to the other side. The door on the other side is open."
    }
    else{
      this.description = "After making it past the earthen door, you return to the water room. Looking out to the water, you notice the bridge is gone! You can't swim, or your fire will go out. In the place of where you expected the first steps of the bridge to be, there's a stone with writing on it..."
      this.switch = true;
      this.switch1 = false;
    }
  }
}