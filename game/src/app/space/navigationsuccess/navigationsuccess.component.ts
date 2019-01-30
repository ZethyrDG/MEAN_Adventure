import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-navigationsuccess',
  templateUrl: './navigationsuccess.component.html',
  styleUrls: ['./navigationsuccess.component.css']
})
export class NavigationsuccessComponent implements OnInit {
  description: String;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.description = "You fixed the Navigation! Good Job!"
    this._httpService.user.progress.navigation = true;
  }

}
