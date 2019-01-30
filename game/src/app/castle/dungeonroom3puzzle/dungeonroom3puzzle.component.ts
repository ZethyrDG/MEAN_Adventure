import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dungeonroom3puzzle',
  templateUrl: './dungeonroom3puzzle.component.html',
  styleUrls: ['./dungeonroom3puzzle.component.css']
})
export class Dungeonroom3puzzleComponent implements OnInit {
  description: String;
  question;
  answers;
  correct;
  count = 0;
  life = 3;
  switch: Boolean = true;
  switch1: Boolean = false;
  constructor(private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {
    this.description = "This time, the seals surround the magical barrier. There are four of them."
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
    let observe = this._httpService.getMediumMyth()
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
        this.description = "All four seals are gone, and the barrier appears to be fading..."
        this.switch1 = true;
        this.switch = false;
      }
      else{
        if(this.count == 1){
          this.description = "One of the seals disappear. Three to go."
          this.getQuestion();
        }
        if(this.count == 2){
          this.description = "Another seal vanishes. Two more."
          this.getQuestion();
        }
        if(this.count == 3){
          this.description = "The third seal fades. Only one to go."
          this.getQuestion();
        }
      }
    }
    else{
      if(this.life == 3){
        this.description = "Above the barrier, an X appears."
        this.life--;
        this.getQuestion();   
      }
      else if(this.life == 2){
        this.description = "Another X appears. Best to avoid any more wrong answers."
        this.life--;
        this.getQuestion(); 
      }
      else if(this.life == 1){
        this._httpService.user.progress.dungeonfail = true;
        this._router.navigate(['/castle/dungeonroom1'])
      }
    }
  }
}