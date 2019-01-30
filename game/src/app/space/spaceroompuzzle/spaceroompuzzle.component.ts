import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-spaceroompuzzle',
  templateUrl: './spaceroompuzzle.component.html',
  styleUrls: ['./spaceroompuzzle.component.css']
})
export class SpaceroompuzzleComponent implements OnInit {
  
  constructor(private _httpService: HttpService, private _router: Router) { }
  description: String;
  questions: any= [{question:""}]
  oneQ:any = [{question:""}]
  answers: any;
  correct: any;
  count:any;
  ngOnInit() {
    this.getQ("easy", '15')
    this.description="This door is locked and seems to only open if you can answer a question"
    this.count=0
  }
  getQ(level, category){
    let obs = this._httpService.getQ(level, category);
    obs.subscribe(data => {
      this.oneQ = data
      this.oneQ = this.oneQ.results
      this.answers = this.oneQ[0].incorrect_answers
      this.answers.push(this.oneQ[0].correct_answer)
      this.shuffle(this.answers)
      this.correct=this.oneQ[0].correct_answer
      console.log(this.correct)
    })
  }
  shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }
  param(num){
    if(num == this.correct){
      this.count += 1;
      this.description="You got it right! Good thing you play so many video games. And your parents said they weren't good for you. You heard a click and you can now open the door... Or you can play around with more questions, you're in no hurry"
      this.getQ('easy', '15')
    }
    else{
      this.description="Hmm looks like the correct answer was "+this.correct+". Why don't you try again?"
      this.getQ('easy', '15')
    }
  }

}
