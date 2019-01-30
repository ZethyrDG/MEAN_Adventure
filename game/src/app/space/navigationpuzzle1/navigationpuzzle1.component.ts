import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-navigationpuzzle1',
  templateUrl: './navigationpuzzle1.component.html',
  styleUrls: ['./navigationpuzzle1.component.css']
})
export class Navigationpuzzle1Component implements OnInit {

  constructor(private _httpService: HttpService) { }
  description: String;
  questions: any= [{question:""}]
  oneQ:any = [{question:""}]
  answers: any;
  correct: any;
  count:any;
  ngOnInit() {
    this.getQ("medium", '22')
    this.description="Please recalibrate my navigation system by Answering a question correctly"
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
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
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
      this.description="You got it! You can access the next room! But be careful, the next rooms wont be as easy."
      this.getQ('medium', '22')
    }
    else{
      this.description="Hmm Looks like the correct answer was "+this.correct+". Lets try another"
      this.getQ('medium', '22')
    }
  }

}
