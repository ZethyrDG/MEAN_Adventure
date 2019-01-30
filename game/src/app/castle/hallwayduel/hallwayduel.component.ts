import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-hallwayduel',
  templateUrl: './hallwayduel.component.html',
  styleUrls: ['./hallwayduel.component.css']
})
export class HallwayduelComponent implements OnInit {
  description: String;
  question;
  answers;
  correct;
  count = 0;
  life = 3;
  switch: Boolean = true;
  switch1: Boolean = false;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.description = "'You'll never defeat me!' he screams, and out of his wand, a math problem flys at you. Solve it to defeat him!"
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
    let observe = this._httpService.getMediumMath()
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
        this.description = "'NO! How could you have defeated me?!' he yells, as he falls to floor. He appears to be unconscious."
        this.switch1 = true;
        this.switch = false;
      }
      else{
        if(this.count == 1){
          this.description = "'You're smarter than I thought, but can you handle THIS!?'"
          this.getQuestion();
        }
        if(this.count == 2){
          this.description = "'How are you doing this?! You'll never withstand this one!'"
          this.getQuestion();
        }
      }
    }
    else{
      this.description = "You feel drained, as if part of your very lifeforce has vanished. 'Haha, none can withstand my mathematical power!'"
      this.life--;
      this.getQuestion();
      if(this.life == 0){
        this.description = "You've been defeated! However, it's not over for you yet, you find yourself transported back in time, and the duel starts again!"
        this.life = 3;
        this.count = 0;
      }
    }
  }
}