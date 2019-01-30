import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-labguardianpuzzle',
  templateUrl: './labguardianpuzzle.component.html',
  styleUrls: ['./labguardianpuzzle.component.css']
})
export class LabguardianpuzzleComponent implements OnInit {
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
    this.description = "A small creature is guarding the tools you need to make the potion. 'If you want to use these, you'll have to answer my riddles.'"
    this.getQuestion()
  }
  shuffle(arr){
    var x = arr.length-1
    var temp
    while (x != 0){
        var y = Math.floor(Math.random() * x);
        temp = arr[y];
        arr[y] = arr[x];
        arr[x] = temp;
        x--;
    }
  }
  getQuestion(){
    if(this.count == 0){
      this.question = "The more you take, the more you leave behind. What am I?"
      this.correct = "footsteps"
      this.correct2 = "steps"
    }
    if(this.count == 1){
      this.question = "What has a head, a tail, is brown, and has no legs?"
      this.correct = "penny"
      this.correct2 = "a penny"
    }
    if(this.count == 2){
      this.question = "What comes once in a minute, twice in a moment, but never in a thousand years?"
      this.correct = "m"
      this.correct2 = "letter m"
    }
  }
  onClick(){
    if(this.answer == this.correct || this.answer == this.correct2){
      this.count++;
      if(this.count == 3){
        this.description = "'Well done, you may use these tools any time'. And with that, he vanishes."
        this.switch1 = true;
        this.switch = false;
        this._httpService.user.progress.labpuzzle2 = true;
      }
      else{
        if(this.count == 1){
          this.description = "'Very good, but do you know this one?'"
          this.getQuestion();
          this.answer = ""
        }
        if(this.count == 2){
          this.description = "'You're good at this, here's my final riddle.'"
          this.getQuestion();
          this.answer = ""
        }
      }
    }
    else{
      this.description = "'That's not right...'"
    }
  }
}