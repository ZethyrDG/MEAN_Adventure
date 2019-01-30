import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-labpotion',
  templateUrl: './labpotion.component.html',
  styleUrls: ['./labpotion.component.css']
})
export class LabpotionComponent implements OnInit {
  description: String;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.description = "You've successfully brewed the potion of unsealing!"
    this._httpService.user.inventory.potion = true;
  }
}
