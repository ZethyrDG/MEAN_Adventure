import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-basement',
  templateUrl: './basement.component.html',
  styleUrls: ['./basement.component.css']
})
export class BasementComponent implements OnInit {
  description: String;
  switch: boolean = false;
  imgSwap: Boolean = false;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    if(this._httpService.user.progress.savedthewizard == false){
      this.description = "You finally made it into the mysterious basement.  It looks failry normal except for the stone archway that is glowing.  Should you walk through it?"
    }
    if(this._httpService.user.progress.savedthewizard == true){
      this.description = "The basement leaves no evidence that anything out of the ordinary happened here."
      this.switch = true;
      this.imgSwap = true;
    }
  }

}
