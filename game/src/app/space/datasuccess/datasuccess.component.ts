import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-datasuccess',
  templateUrl: './datasuccess.component.html',
  styleUrls: ['./datasuccess.component.css']
})
export class DatasuccessComponent implements OnInit {
  description: String;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.description = "All three screens are working! You hear a notification from a speaker that says, 'All data computers are fully functional'"
    this._httpService.user.progress.data = true;
  }

}
