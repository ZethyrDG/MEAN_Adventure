import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-bluedoor',
  templateUrl: './bluedoor.component.html',
  styleUrls: ['./bluedoor.component.css']
})
export class BluedoorComponent implements OnInit {
  description: String;
  switch: Boolean = false;
  switch1: Boolean = true;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    if(this._httpService.user.inventory.blueflame == false){
      this.description = "You crossed the bridge, and walked through the door on the other side. You enter a small, yet very tall room. Once again, this room is covered in blue flame, all too high to reach. There's another door not far from you."
    }
    else{
      this.description = "As you exit the blue flame temple, blue flames in hand, the doors in the small room suddenly shut, sealing you in a wall of earth and stone. On the door, some writing appears..."
      this.switch = true;
      this.switch1 = false;
    }
  }
}