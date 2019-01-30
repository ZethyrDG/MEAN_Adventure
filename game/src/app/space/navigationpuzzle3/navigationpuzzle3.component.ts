import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-navigationpuzzle3',
  templateUrl: './navigationpuzzle3.component.html',
  styleUrls: ['./navigationpuzzle3.component.css']
})
export class Navigationpuzzle3Component implements OnInit {

  constructor(private _httpService: HttpService) { }
  description: String;
  questions: any= [{question:""}]
  oneQ:any = [{question:""}]
  answers: any;
  correct: any;
  count:any;
  ngOnInit() {
    this.getQ('easy', '22')
    this.description="Please recalibrate my navigation system by Answering 5 questions correctly with no mistakes"
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
      console.log(this.count)
      this.description="Thats it! Keep it up!"
      this.getQ('easy', '22')
    }
    else{
      if(this.count<5){
        this.description="Hmm Looks like the correct answer was "+this.correct+". Oh no! The correct answer count has reset!"
        this.count = 0;
      }
      else{
        this.description="Hmm Looks like the correct answer was "+this.correct+"."
      }
      this.getQ('easy', '22')
    }
    if(this.count == 5){
      this.description="You answered enough correctly in a row! You can move on now or keep playing if you like"
    }
  }
  // getQs(){
  //   let obs = this._httpService.getQs();
  //   obs.subscribe(data => {
  //     console.log(data)
  //     this.questions = data.results
  //   })
  // }
}
