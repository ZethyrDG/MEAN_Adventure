import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-lablockpuzzle',
  templateUrl: './lablockpuzzle.component.html',
  styleUrls: ['./lablockpuzzle.component.css']
})
export class LablockpuzzleComponent implements OnInit {
  description: String;
  question;
  answers;
  correct;
  count = 0;
  switch: Boolean = true;
  switch1: Boolean = false;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.description = "As you inspect the lock, it looks like you have to determine the value of x to open the cupboard."
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
      this.question = "x - 9 = -7"
      this.answers = [-11, 2, 0, -3, 16]
      this.correct = 2
    }
    if(this.count == 1){
      this.question = "-4x + 7 = 3"
      this.answers = [14, -5, 1, -1, 2]
      this.correct = 1
    }
    if(this.count == 2){
      this.question = "-x + 5 = -14"
      this.answers = [19, 5, 6, 13, -5]
      this.correct = 19
    }
  }
  onClick(index){
    if(this.answers[index] == this.correct){
      this.count++;
      if(this.count == 3){
        this.description = "The lock pops open, and you grab some ingredients from the cupboard."
        this._httpService.user.progress.labpuzzle3 = true;
        this.switch1 = true;
        this.switch = false;
      }
      else{
        this.description = "Again, solve for x."
        this.getQuestion();
      }
    }
    else{
      this.description = "Nothing happened. Try again."
    }
  }
}