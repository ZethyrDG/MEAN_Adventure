import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-navigationroom',
  templateUrl: './navigationroom.component.html',
  styleUrls: ['./navigationroom.component.css']
})
export class NavigationroomComponent implements OnInit {
  description: String;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.description="You walk into the room labeled navigation. There is a computer flashing a warning sign that says, 'Door to further navigation rooms currently unavailable,please resolve problem to move forward'"
  }

}
