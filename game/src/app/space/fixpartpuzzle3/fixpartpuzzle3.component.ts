import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fixpartpuzzle3',
  templateUrl: './fixpartpuzzle3.component.html',
  styleUrls: ['./fixpartpuzzle3.component.css']
})
export class Fixpartpuzzle3Component implements OnInit {
  
  constructor(private _httpService: HttpService, private _router: Router) { }
  description: String;
  questions: any= [{question:""}]
  oneQ:any = [{question:""}]
  answers: any;
  correct: any;
  count:any;
  ngOnInit() {
    this.getQ("medium", '18')
    this.description="To fix these engine parts you need knowledge of technology and gadgets!"
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
    if(num==0){
      this._httpService.user.inventory.fixedpart3=true;
      this._router.navigate(['/space/engineroom'])
    }
    if(num == this.correct){
      this.count += 1;
      console.log(this.count)
      this.description="Thats it! Keep it up! You need a count of 5 correct to fully repair the part"
      this.getQ('medium', '18')
    }
    else{
      if(this.count < 5){
        this.description="Hmm looks like the correct answer was "+this.correct+". The Computer sparked and undid some of your progress :("
        this.count -= 1;
      }
      else{
        this.description="Hmm looks like the correct answer was "+this.correct+"."
      }
      this.getQ('medium', '18')
    }
    if(this.count == 5){
      this.description="You answered enough correctly! you can move on now or keep playing if you like"
    }
  }

}
