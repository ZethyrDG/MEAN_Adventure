import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-purplewaterpuzzle',
  templateUrl: './purplewaterpuzzle.component.html',
  styleUrls: ['./purplewaterpuzzle.component.css']
})
export class PurplewaterpuzzleComponent implements OnInit {
  description: String;
  question;
  answer = ""
  correct;
  correct2;
  switch: Boolean = true;
  switch1: Boolean = false;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.description = "It speaks only the riddle, then is silent."
    this.getQuestion()
  }
  getQuestion(){
      this.question = "Three lives have I, gentle enough to soothe the skin"
      this.correct = "water"
      this.correct2 = "water"
  }
  onClick(){
    if(this.answer == this.correct || this.answer == this.correct2){
        this.description = "The fountains start to change..."
        this.switch1 = true;
        this.switch = false;
    }
    else{
      this.description = "Nothing happens."
    }
  }
}