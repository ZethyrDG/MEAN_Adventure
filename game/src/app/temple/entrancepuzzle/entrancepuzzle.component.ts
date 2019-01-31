import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-entrancepuzzle',
  templateUrl: './entrancepuzzle.component.html',
  styleUrls: ['./entrancepuzzle.component.css']
})
export class EntrancepuzzleComponent implements OnInit {
  description: String;
  question;
  answer = ""
  correct;
  correct2;
  count = 0;
  switch: Boolean = true;
  switch1: Boolean = false;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.description = "The entrance is sealed, and three riddles appear. The first reads:"
    this.getQuestion()
  }
  getQuestion(){
    if(this.count == 0){
      this.question = "What belongs to you, but other people use it more than you?"
      this.correct = "name"
      this.correct2 = "my name"
    }
    if(this.count == 1){
      this.question = "Tall I am young, Short I am old, While with life I glow, Wind is my foe. What am I?"
      this.correct = "candle"
      this.correct2 = "a candle"
    }
    if(this.count == 2){
      this.question = "What is black when you buy it, red when you use it, and gray when you throw it away?"
      this.correct = "charcoal"
      this.correct2 = "coal"
    }
  }
  onClick(){
    if(this.answer == this.correct || this.answer == this.correct2){
      this.count++;
      if(this.count == 3){
        this.description = "The final riddle fades, and the door starts to open."
        this.switch1 = true;
        this.switch = false;
      }
      else{
        if(this.count == 1){
          this.description = "The first riddle vanishes. The second riddle is:"
          this.getQuestion();
          this.answer = ""
        }
        if(this.count == 2){
          this.description = "The second riddle disappears. Now for the final riddle:"
          this.getQuestion();
          this.answer = ""
        }
      }
    }
    else{
      this.description = "Nothing happens."
    }
  }
}