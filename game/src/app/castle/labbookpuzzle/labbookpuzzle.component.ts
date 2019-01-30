import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-labbookpuzzle',
  templateUrl: './labbookpuzzle.component.html',
  styleUrls: ['./labbookpuzzle.component.css']
})
export class LabbookpuzzleComponent implements OnInit {
  description: String;
  question;
  answers;
  correct;
  count = 0;
  switch: Boolean = true;
  switch1: Boolean = false;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.description = "You pick up the recipe book, but it won't open. It appears to be testing you."
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
    let observe = this._httpService.getEasyHistory()
    observe.subscribe(data => {
      data.results[0].incorrect_answers.push(data.results[0].correct_answer)
      this.shuffle(data.results[0].incorrect_answers)
      this.question = data.results[0].question;
      this.answers = data.results[0].incorrect_answers
      this.correct = data.results[0].correct_answer
    })
  }
  onClick(index){
    if(this.answers[index] == this.correct){
      this.count++;
      if(this.count == 3){
        this.description = "The book opens, and as you search through it, you find the recipe for the potion of unsealing!"
        this.switch1 = true;
        this.switch = false;
        this._httpService.user.progress.labpuzzle1 = true;
      }
      else{
        this.description = "The book still won't open. Another question appears."
        this.getQuestion();
      }
    }
    else{
      this.description = "Nothing happened. Maybe that wasn't the correct answer?"
    }
  }
}