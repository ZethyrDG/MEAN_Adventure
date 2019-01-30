import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-redwind',
  templateUrl: './redwind.component.html',
  styleUrls: ['./redwind.component.css']
})
export class RedwindComponent implements OnInit {
  description: String;
  switch: Boolean = false;
  switch1: Boolean = true;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    if(this._httpService.user.inventory.redflame == false){
      this.description = "Entering this new room, you see grates along both walls. While the room is covered in red flames too high to reach, behind the grates is darkness, and you can't tell what's beyond them. Fortunately, they seem sturdy enough to hold anything that might try to come through. A door on the far side is open."
    }
    else{
      this.description = "This time when you enter the room, there are extremely loud wooshing sounds coming from one side of the room. It looks like a massive fan is blowing air from one side to the other. Testing the wind, you know that trying to cross will put out your red flame torch in seconds. You'll have to find a way to shut it off. On the wall, writing appears..."
      this.switch = true;
      this.switch1 = false;
    }
  }
}