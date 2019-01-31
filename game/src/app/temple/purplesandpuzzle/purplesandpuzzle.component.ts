import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-purplesandpuzzle',
  templateUrl: './purplesandpuzzle.component.html',
  styleUrls: ['./purplesandpuzzle.component.css']
})
export class PurplesandpuzzleComponent implements OnInit {
  description: String;
  question;
  answer = ""
  correct;
  correct2;
  switch: Boolean = true;
  switch1: Boolean = false;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.description = "After speaking the riddle, it falls silent."
    this.getQuestion()
  }
  getQuestion(){
      this.question = "What has roots as nobody sees, is taller than trees, up, up it goes, dnd yet never grows?"
      this.correct = "mountain"
      this.correct2 = "a mountain"
  }
  onClick(){
    if(this.answer == this.correct || this.answer == this.correct2){
        this.description = "The sand begins to swirl..."
        this.switch1 = true;
        this.switch = false;
    }
    else{
      this.description = "Nothing happens."
    }
  }
}