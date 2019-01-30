import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-hallwaypuzzle',
  templateUrl: './hallwaypuzzle.component.html',
  styleUrls: ['./hallwaypuzzle.component.css']
})
export class HallwaypuzzleComponent implements OnInit {
  description: String;
  question;
  answers;
  correct;
  count = 0;
  switch: Boolean = true;
  switch1: Boolean = false;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.description = "The statue moves slightly, and asks you a question."
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
    let observe = this._httpService.getEasyMyth()
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
        this.description = "The statue stops moving, and returns to its original state."
        this.switch1 = true;
        this.switch = false;
      }
      else{
        this.description = "It asks you another question."
        this.getQuestion();
      }
    }
    else{
      this.description = "It glares at you. Clearly, that was not right."
    }
  }
}