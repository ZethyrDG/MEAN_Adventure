import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dungeonroom1puzzle',
  templateUrl: './dungeonroom1puzzle.component.html',
  styleUrls: ['./dungeonroom1puzzle.component.css']
})
export class Dungeonroom1puzzleComponent implements OnInit {
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
    this.description = "The door to the next room blocks your way. There are three seals on the door, and a question appears."
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
    let observe = this._httpService.getMediumHistory()
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
        this.description = "The final seal is gone, and you hear a click. The door unlocks."
        this.switch1 = true;
        this.switch = false;
      }
      else{
        if(this.count == 1){
          this.description = "One of the seals disappear. Two to go."
          this.getQuestion();
        }
        if(this.count == 2){
          this.description = "Another seal vanishes. Just one more!"
          this.getQuestion();
        }
      }
    }
    else{
      if(this.life == 3){
        this.description = "In the center of the three seals, an X appears. It looks like there is only room for 2 more. Best not to find out what happens if you get any more wrong..."
        this.life--;
        this.getQuestion();   
      }
      else if(this.life == 2){
        this.description = "Another X appears in the center. There's only room for one more..."
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
