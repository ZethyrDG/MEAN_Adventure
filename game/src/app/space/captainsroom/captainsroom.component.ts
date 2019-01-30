import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';


@Component({
  selector: 'app-captainsroom',
  templateUrl: './captainsroom.component.html',
  styleUrls: ['./captainsroom.component.css']
})
export class CaptainsroomComponent implements OnInit {
  description: String;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.description="You did it! I knew you could! You are a savior to my people! Let me drop you off back home, maybe we could get some icecream on the way"
    this._httpService.user.progress.savedAlien = true;
  }

}
