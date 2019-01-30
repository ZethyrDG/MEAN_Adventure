import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-towerpuzzle',
  templateUrl: './towerpuzzle.component.html',
  styleUrls: ['./towerpuzzle.component.css']
})
export class TowerpuzzleComponent implements OnInit {
  description: String;
  question;
  answers;
  correct;
  count = 0;
  switch: Boolean = true;
  switch1: Boolean = false;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.description = "As you examine the seal, you notice an unfinished equation. You must have to solve it!"
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
    let observe = this._httpService.getEasyMath()
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
        this.description = "You've successfully solved the door puzzle, and removed the seal."
        this.switch1 = true;
        this.switch = false;
      }
      else{
        this.description = "Another equation appears in its place."
        this.getQuestion();
      }
    }
    else{
      this.description = "The seal didn't respond. You must have the incorrect answer."
    }
  }
}
