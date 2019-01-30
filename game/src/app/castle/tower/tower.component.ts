import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-tower',
  templateUrl: './tower.component.html',
  styleUrls: ['./tower.component.css']
})
export class TowerComponent implements OnInit {
  description: String;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.description = "After stepping through the strange glowing archway, you arrive in a small room made of stone. Looking around, you notice a window. As you peer out the window, you see a huge castle, which you seem to be inside of. Perplexed, you turn around and notice a door with what appears to be a seal on it."
  }
}
