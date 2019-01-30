import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-hallwayescapepuzzle',
  templateUrl: './hallwayescapepuzzle.component.html',
  styleUrls: ['./hallwayescapepuzzle.component.css']
})
export class HallwayescapepuzzleComponent implements OnInit {
  description: String;
  question;
  answers;
  correct;
  count = 0;
  switch: Boolean = true;
  switch1: Boolean = false;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.description = "The symbols on one side of your prison come into focus..."
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
    let observe = this._httpService.getEasyScience()
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
      if(this.count == 4){
        this.description = "The symbols on all four sides have vanished, and you can now escape."
        this.switch1 = true;
        this.switch = false;
      }
      else{
        this.description = "More symbols appear on another side of your prison."
        this.getQuestion();
      }
    }
    else{
      this.description = "Nothing happens. That must not be right."
    }
  }
}