import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dungeonspellbook',
  templateUrl: './dungeonspellbook.component.html',
  styleUrls: ['./dungeonspellbook.component.css']
})
export class DungeonspellbookComponent implements OnInit {
  description: String;
  constructor(private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {
    this.description = "Solving the final room's puzzle, the barrier surrounding the book collapses. As you prepare to grab it, you can feel the power radiating from the book. Who knows what will happen when you grab it..."
    
  }
  onClick(type){
    if(type == 0){
      this._httpService.user.inventory.spellbook = true;
      this._router.navigate(['/castle/mainroom'])
    }
  }
}
